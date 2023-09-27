import React from 'react';
import { View, Image } from 'react-native';
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
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Formik
                initialValues={{ username: '', password: '' }} onSubmit={handleLogin} >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adınızı giriniz"
                            value={values.username}
                            onType={handleChange('username')}
                        />
                        <Input
                            placeholder="Şifrenizi giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                        />
                        <Button text="Giriş Yap" onPressHandle={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default Login;