import React from 'react';
import { KeyboardAvoidingView, View, Image } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';

const logo = require('../../files/images/shopping.png');

const Login = () => {
    function handleLogin(values) {
        console.log(values);
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
                        <Button text="Giriş Yap" onPressHandle={handleSubmit} />
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

export default Login;