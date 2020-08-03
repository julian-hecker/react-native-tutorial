import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    Image,
    TouchableHighlight as Touch,
} from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={{
                uri:
                    'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
        >
            <View style={styles.logobox}>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.logotext}>
                    Save The World
                </Text>
            </View>
            <Touch
                style={[styles.login, styles.button]}
                onPress={() => alert('hi')}
                onLongPress={() => alert('HI')}
            >
                <Text style={{ fontSize: 30 }}>Login</Text>
            </Touch>
            <Touch
                style={[styles.register, styles.button]}
                onPress={() => alert('hi')}
                onLongPress={() => alert('HI')}
            >
                <Text style={{ fontSize: 30 }}>Register</Text>
            </Touch>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        height: 75,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        backgroundColor: 'coral',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logobox: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
    },
    logotext: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    register: {
        backgroundColor: 'dodgerblue',
    },
});

export default WelcomeScreen;
