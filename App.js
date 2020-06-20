import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import { createStore, combineReducers} from 'redux';
import {reducer} from './store/reducers/profile'

export default function App() {

  const reducers = combineReducers({
    profile: reducer,
  });

  const store = createStore(reducers);

  return (
    <Provider store={store}><AppNavigator /></Provider>
  )
}

const styles = StyleSheet.create({});
