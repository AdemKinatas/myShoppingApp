import React from 'react';
import LottieView from "lottie-react-native";

const Error = () => {
    return <LottieView source={require('../../files/json-files/error.json')} autoPlay loop/>;
}

export default Error;