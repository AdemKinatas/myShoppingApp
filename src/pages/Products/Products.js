import { FlatList } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({ navigation }) => {
    const { error, loading, data } = useFetch(Config.API_PRODUCT_URL);

    const handleProductSelect = id => {
        navigation.navigate('ProductDetailPage', { id });
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