/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, Text, View
} from 'react-native';


class Greenting extends Component {
    render() {
        return (
            <Text>Hello { this.props.name }</Text>
        ) ;
    }
}

export default class AwesomeProject extends Component {
  render() {
      return (
          <View style={{alignItems:'center'}}>
              <Greenting name = "Rexxar"/>
              <Greenting name = "Jaina"/>
              <Greenting name = "Valeera" />
          </View>
      ) ;
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
