import { SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({ navigation }) => {
    const { error, loading, data } = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('Detay', { id });
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;

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


    return <FlatList data={data} renderItem={renderProduct} />;
}

export default Products;