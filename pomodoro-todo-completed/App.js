import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/native/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    return <Root store={store} persistor={persistor} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
