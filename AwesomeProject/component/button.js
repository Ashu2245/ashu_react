import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

export class Button extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }
    onPress() {
        console.log(this.props.children);
        this.props.onPress();
    }
    render() {
        return (
            <TouchableNativeFeedback onPress={this.onPress} underlayColor="#B5B5B5" background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.button}>
                    <Text style={{
                        color: 'white'
                    }}>{this.props.children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        borderRadius: 3,
        backgroundColor: 'gray',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        marginRight: 10
    }
});
