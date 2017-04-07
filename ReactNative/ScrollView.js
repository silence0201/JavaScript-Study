/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, ScrollView, Image, Text, View,StyleSheet
} from 'react-native';


class IScrolledDownAndWhatHappenedNextShockedMe extends  Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:16}}>Scroll me plz</Text>
                <Image source={require('./img/1.jpg')} style={ style.imageSize}/>
                <Image source={require('./img/1.jpg')} style={ style.imageSize}/>
                <Image source={require('./img/1.jpg')}  style={style.imageSize}/>
                <Image source={require('./img/1.jpg')}  style={style.imageSize}/>
                <Image source={require('./img/1.jpg')}  style={style.imageSize}/>
            </ScrollView>
        ) ;
    }
}

const style = StyleSheet.create({
    imageSize: {
        width: 53 * 3,
        height:89 * 3,
    }
}) ;


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe);
