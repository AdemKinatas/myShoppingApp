import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/Cards/ProductCard';
import styles from './Products.style';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: productData} = await axios.get(Config.API_URL);
        setData(productData);
    }

    const renderProduct = ({item}) => <ProductCard product={item} />;
    
    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    );
};

export default Products;