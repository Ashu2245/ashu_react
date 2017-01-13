import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Slider,
    View,
    Picker,
    Item,
    TextInput,
    Platform,
    ScrollView,
    ToolbarAndroid,
    DrawerLayoutAndroid,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import {Button} from './button';
var toolbarActions = [
     {
        title: 'Filter'
    }, {
        title: 'Settings',
        icon: require('./../img/setting.png'),
        show: 'always'
    }
];
var NavigationView = (props) => (
                <View style={{flex: 1, backgroundColor: 'light-content'}}>
                    <TouchableHighlight onPress={props.component.closeDrawer}>
                        <Text>{'Close Drawer'}</Text>
                    </TouchableHighlight>
                </View>
              );
export class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            actionText: 'Action',
            language:'select one',
            value:this.props.value,
        }
        this.goBack = this.goBack.bind(this);
        this.openDrawer=this.openDrawer.bind(this);
        this.closeDrawer=this.closeDrawer.bind(this);
    }

    goBack() {
        let text = this.state.text;
        let language=this.state.language;
        console.log(language);
        this.props.navigator.push({
            name: "home",
            passProps: {
                name: text
            }
        });
    }
    // addCan()
    // componentWillMount(props) {
    //     console.log(this.props.name);
    // }
    componentWillMount(props){
      // console.log(this.state.language);
      console.log(this.state.value);
    }
    canAdd(){
      this.props.navigator.pop({name:'home'})
    }
    openDrawer(){
      this.refs['myDrawer'].openDrawer();
    }
     closeDrawer(){
       this.refs['myDrawer'].closeDrawer();
     }
    render() {
      // console.log(this.state.language);
      console.log(this.state.value);
        return (
          <View style={{flex: 1}} >
          <DrawerLayoutAndroid ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => <NavigationView component={this}/>}>
                    <View style={{ alignItems: 'flex-start'}}>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>{'Open Drawer'}</Text>
                        </TouchableHighlight>
                    </View>
                    <ToolbarAndroid actions={toolbarActions}
                       navIcon={require('./../img/menu.png')}
                       logo={require('./../img/react-logo.png')}
                       onActionSelected={this._onActionSelected}
                       onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                       style={styles.toolbar}
                       subtitle={this.state.actionText}
                       title="Toolbar"/>
                       <Text style={styles.text} > {this.state.value && +this.state.value.toFixed(3)} </Text>
                       <Slider {...this.props} onValueChange={(value) => this.setState({value: value})} />
                      <Picker selectedValue={this.state.language}
                       onValueChange={(lang) => this.setState({language: lang})}>
                      <Picker.Item label="select" value="select one" />
                      <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    <ScrollView onScroll={() => {
                        console.log('onScroll!');
                    }}  style={{flex: 2}} >
                    <Text style={{
                     fontSize: 20,
                     fontWeight: 'bold'
                 }}>Add Todo</Text>
                    <TextInput style={{
                        height: 40,
                        width: 310,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginBottom: 5
                    }} onChangeText={(text) => this.setState({text})} type="text" value={this.state.text}/>
                    <Button onPress={() => this.goBack('name')}>Submit</Button>
                    <Button onPress={()=> this.canAdd()}>Cancel</Button>
                    <Text style={{
                        fontSize: 20
                    }}>test test test test test test test test test test test test test test test test test test test test test test</Text>
                  </ScrollView>
                </DrawerLayoutAndroid>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    // button: {
    //     height: 40,
    //     borderWidth: StyleSheet.hairlineWidth,
    //     borderColor: '#4caf50',
    //     borderRadius: 4,
    //     backgroundColor: '#4caf50',
    //     alignSelf: 'flex-end',
    //     alignItems: 'flex-end',
    //     padding: 11,
    //     paddingTop: 7,
    //     marginRight: 10
    // }
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 50
    }
});
