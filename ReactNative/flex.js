/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';



export default class AwesomeProject extends Component {
  render() {
      return (
          // 试试去掉父View中的`flex: 1`。
          // 则父View不再具有尺寸，因此子组件也无法再撑开。
          // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
          <View style={ {height:300} }>
              <View style={ {flex: 1, backgroundColor:'powderblue' } }></View>
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, backgroundColor: 'steelblue'}} />
          </View>
      ) ;
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
