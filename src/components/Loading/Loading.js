import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return <LottieView source={require('../../asset/animation_lmv1iecs.json')} autoPlay loop />;
}

export default Loading;