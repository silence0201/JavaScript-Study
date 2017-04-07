/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, ListView, Text, View
} from 'react-native';


class ListViewBasics extends  Component {
    constructor(props) {
        super(props) ;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        }) ;
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        } ;
    }

    render() {
        return (
            <View style={ {flex:1,paddingTop:22} }>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        ) ;
    }
}


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
