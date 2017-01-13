import React, {Component} from 'react';
import {TodoList} from './component/todolist'
import {AddTodo} from './component/addfrom'
import {NavigationBar} from './component/navigationBar'
import {AppRegistry, StyleSheet, Text, View, Navigator,StatusBar} from 'react-native';

export class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.navigatorRenderScene.bind(this);
        this.configureScene.bind(this);
    }
    render() {
        return (
          <View style={{flex:1}}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Navigator configureScene={this.configureScene} initialRoute={{
                name: 'home',
                payload: {},
            }} renderScene={this.navigatorRenderScene}/>
            </View>
        );
    }
    navigatorRenderScene(route, navigator) {
        // console.log(route);
        // console.log(route);
        if (route.name === 'home') {
            return (<TodoList navigator={navigator} {...route.passProps}/>);
        } else if (route.name === 'add') {
            return (<AddTodo navigator={navigator} {...route.payload}/>)
        }
    }
    configureScene(route, routeStack) {
        if (route.name === 'home') {
            return Navigator.SceneConfigs.VerticalUpSwipeJump
        } else if (route.name === 'add') {
            return Navigator.SceneConfigs.VerticalDownSwipeJump
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
