import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUSer(JSON.parse(userSession));
            setIsAuthLoading(false);
        })
    }, [])

    const authStore = createStore(reducers, { user, isAuthLoading });
    return <Provider store={authStore}>{children}</Provider>
}

export default AuthProvider;