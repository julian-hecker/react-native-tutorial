import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity as Button,
    Image,
} from 'react-native';

import * as Location from 'expo-location';
import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
    const [location, setLocation] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrMsg('Permission to use Location was denied!');
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    });

    let text = 'reee...';
    if (errMsg) {
        text = errMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return <WelcomeScreen />;
};

export default App;
