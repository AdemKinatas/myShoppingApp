import React from 'react';
import { KeyboardAvoidingView, View, Image, Alert } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

const logo = require('../../files/images/shopping.png');

const Login = ({ navigation }) => {

    const { data, loading, error, post } = usePost();

    function handleLogin(values) {
        post(`${Config.API_AUTH_URL}/login`, values);
    }

    if (error) {
        return (
            Alert.alert('Dükkan', 'Bir Hata Oluştu!')
        );
    }
    
    if(data) {
        if (data.status === 'Error') { Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!') }
        else { navigation.navigate("ProductsPage") }
        console.log(data);
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