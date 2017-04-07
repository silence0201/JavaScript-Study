/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, Text, View ,StyleSheet
} from 'react-native';



export default class AwesomeProject extends Component {
  render() {
      return (
          <View>
              <Text style={style.red}>just red</Text>
              <Text style={style.bigblue}>juest bigblue</Text>
              <Text style={[style.bigblue, style.red]}>bigblue, then red</Text>
              <Text style={[style.red, style.bigblue]}>red, then bigblue</Text>
          </View>
      ) ;
  }
}

const style = StyleSheet.create({
    bigblue: {
        color:'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },

    red: {
        color:'red'
    }
}) ;


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
