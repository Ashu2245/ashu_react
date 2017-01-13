import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform
} from 'react-native';

export const NavigationBar = {
    LeftButton: function(route, navigator, index, navState) {
        return (
            <View>
                <Image style={{
                    width: 43,
                    height: 43
                }} source={require('../img/react-logo.png')}/>
            </View>
        )
    },
    Title: function(route, navigator, index, navState) {
        return (
            <Text style={styles.texting}>Todo APP</Text>
        )
    },
    RightButton: function(route, navigator, index, navState) {
        return null
    }
}

const styles = StyleSheet.create({
    nav: {
        paddingTop: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    texting: {
        paddingTop: 25,
        fontSize: 15,
        paddingLeft: 50,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
});
