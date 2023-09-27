import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style';

const Button = ({ text, onPressHandle }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandle}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;