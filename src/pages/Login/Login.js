import React from 'react';
import { KeyboardAvoidingView, View, Image, Alert } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import { useDispatch } from 'react-redux'

const logo = require('../../files/images/shopping.png');

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();


    function handleLogin(values) {
        post(`${Config.API_AUTH_URL}/login`, values);
    }

    if (error) {
        return (
            Alert.alert('Dükkan', 'Bir Hata Oluştu!')
        );
    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!')
        }
        else {
            dispatch({ type: 'SET_USER', payload: { user } });
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={logo} style={styles.logo} />
            <Formik
                initialValues={{ username: '', password: '' }} onSubmit={handleLogin} >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adınızı giriniz"
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input
                            placeholder="Şifrenizi giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPressHandle={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

export default Login;

const user = {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}