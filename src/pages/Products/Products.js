import { SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';

const Products = () => {
    const { error, loading, data } = useFetch(Config.API_URL);

    if (loading) {
        return (
            <ActivityIndicator size="large" />
        );
    };

    if (error) {
        return (
            <Text>{error}</Text>
        );
    };

    const renderProduct = ({ item }) => <ProductCard product={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    );
};

export default Products;