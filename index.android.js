/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,

} from 'react-native';

import Dimensions from 'Dimensions';


const url='http://wdhome.club/map.html'

export default class Rnwd extends Component {
  render() {
    return (
             <WebView 
             source={{uri:url}}
             ></WebView>
    );
  }
}


AppRegistry.registerComponent('Rnwd', () => Rnwd);
