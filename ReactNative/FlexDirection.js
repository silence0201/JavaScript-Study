/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';


class FlexDirectionBasics extends Component {
    render() {
       return  (
           // 尝试把`flexDirection`改为`column`看看
           <View style={ {flex: 1, flexDirection: 'row'} }>
               <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
               <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
               <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
           </View>
       )
    } ;
}

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
