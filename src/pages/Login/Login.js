import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './Login.style';

const logo = require('../../files/images/shopping.png');

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Giriş Yap</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton} >
                <Text style={styles.loginButtonText}>Giriş</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;