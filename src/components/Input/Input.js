import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, value, onType, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                secureTextEntry={isSecure}
            />
            <Icon style={styles.icon} name={iconName} />
        </View>
    );
}

export default Input;