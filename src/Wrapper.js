import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider';

const Wrapper = () => {
    return(
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}

export default Wrapper;