import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Detail.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (data) {
        return (
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image source={{ uri: data.image }} style={styles.image} />
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} ₺</Text>
                </View>
            </View>
        );
    } else {
        return <Error />;
    }
}

export default Detail;