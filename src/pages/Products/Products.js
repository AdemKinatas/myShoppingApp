import { SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = () => {
    const { error, loading, data } = useFetch(Config.API_URL + 'adem');

    const renderProduct = ({ item }) => <ProductCard product={item} />;

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <Error />
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    );
}

export default Products;