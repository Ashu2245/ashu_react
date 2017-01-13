import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    ScrollView,
    ToastAndroid,
    ToolbarAndroid,
    RefreshControl,
    RecyclerViewBackedScrollView,
    TouchableNativeFeedback
} from 'react-native';
import {Button} from './button';
var toolbarActions = [
    {
        title: 'Create',
        icon: require('./../img/plus-outline.png'),
        show: 'always'
    }, {
        title: 'Filter'
    }, {
        title: 'Settings',
        icon: require('./../img/setting.png'),
        show: 'always'
    }
];
export class TodoList extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            getRowData: (data, sectionId, rowId) => {
                return data[sectionId][rowId];
            },
            getSectionHeaderData: (data, sectionId) => {
                return sectionId;
            }
        });
        this.state = {
            text: '',
            actionText:"",
            refreshing: false,
            todos: ds.cloneWithRowsAndSections({
                'Todo': [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                ],
                'Compeleted Todo': [
                    '31',
                    '32',
                    '33',
                    '34',
                    '35',
                    '36',
                    '37',
                    '38',
                    '39',
                    '40',
                    '33',
                    '34',
                    '35',
                    '36',
                    '37',
                    '38'
                ]
            })
        }
        this.renderRow = this.renderRow.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this._renderFooter = this._renderFooter.bind(this);
        this.openAdd = this.openAdd.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._onActionSelected=this._onActionSelected.bind(this);
    }
    // componentWillMount(props) {
    //     console.log(this.props.name);
    // }

    openAdd() {
        this.props.navigator.push({
            name: 'add',
            payload: {
                name: 'hello'
            }
        })

    }
    _onRefresh() {
      alert('wait wait its just a check for refresh')
      }
    _onActionSelected(){
      let actionText=this.state.actionText;
      console.log(actionText);
      if (actionText ==='Icon clicked' ) {
        this.props.navigator.push({
            name: 'add',
            payload: {
                name: 'hello'
            }
        })
      }
    }
    _renderHeader() {
        return (<ToolbarAndroid logo={require('./../img/react-logo.png')} actions={toolbarActions} navIcon={require('./../img/menu.png')} onActionSelected={this._onActionSelected} onIconClicked={() => this.setState({actionText: 'Icon clicked'})} style={{
            backgroundColor: '#e9eaed',
            height: 56
        }} subtitle={this.state.actionText} title="Toolbar"/>)
    }
    _renderFooter() {
        return (
            <View>
                <Button onPress={this.openAdd}>Add</Button>
            </View>
        )
    }
    render() {
        return (<ListView refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} /> } initialListSize={9} style={styles.todoList} dataSource={this.state.todos} renderRow={this.renderRow} renderSectionHeader={this.renderHeader} renderFooter={this._renderFooter} renderHeader={this._renderHeader}/>
      );
    }
    renderRow(rowData) {
        return (
            <View style={styles.todoelement}>
                <TouchableNativeFeedback onPress={() => ToastAndroid.showWithGravity('Raw todo listitems ', ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>

                        <Text style={{fontSize: 20}}>{rowData}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    renderHeader(sectionName) {
        return (
            <View >
                <Text style={styles.head}>{sectionName}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    todoelement: {
        height: 35
    },
    todoList: {
        // marginLeft: 25,
        alignSelf: 'stretch'
    },
    head: {
        fontWeight: 'bold',
        fontSize: 25
    }
});
