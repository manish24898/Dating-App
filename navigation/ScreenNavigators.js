import React from 'react';
import CoinsElement from '../components/UI/CoinsElement';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import LoginScreen from '../screens/Authentication/LoginScreen';
import LoginMobileScreen from '../screens/Authentication/LoginMobileScreen';
import OtpScreen from '../screens/Authentication/OtpScreen';

import HomeScreen from '../screens/Home/HomeScreen';
import MessagesScreen from '../screens/Home/MessagesScreen';
import DiscoverScreen from '../screens/Home/DiscoverScreen';
import SettingsScreen from '../screens/Home/SettingsScreen';
import FiltersScreen from '../screens/Home/FiltersScreen';

import ProfileScreen from '../screens/Home/ProfileScreen';

const AuthenticationNavigator = createStackNavigator();

export const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationNavigator.Navigator>
      <AuthenticationNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthenticationNavigator.Screen
        name="LoginWithMobile"
        component={LoginMobileScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.gradient1},
        }}
      />
      <AuthenticationNavigator.Screen
        name="Otp"
        component={OtpScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.gradient1},
        }}
      />
    </AuthenticationNavigator.Navigator>
  );
};

const HomeNavigator = createStackNavigator();

const HomeStackNaigator = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name="Filter"
        component={FiltersScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: Colors.background},
        }}
      />
    </HomeNavigator.Navigator>
  );
};

const SettingNavigator = createStackNavigator();

const SettingStackNavigator = () => {
  return (
    <SettingNavigator.Navigator>
      <SettingNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: Colors.background},
        }}
      />
    </SettingNavigator.Navigator>
  );
};

const DiscoverNavigator = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <DiscoverNavigator.Navigator>
      <DiscoverNavigator.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{  
          headerShown:false,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: Colors.background},
        }}
      />
      <DiscoverNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{  
          headerShown:false,
        }}
      />
    </DiscoverNavigator.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{activeTintColor: Colors.background}}>
      <TabNavigator.Screen
        name="Home"
        component={HomeStackNaigator}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Ionicons
              name="ios-home"
              color={focused.color}
              size={focused.size}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Discover"
        component={DiscoverStackNavigator}
        options={{
          tabBarIcon: (focused, color, size) => (
            <FontAwesome5
              name="compass"
              color={focused.color}
              size={focused.size}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: (focused, color, size) => (
            <AntDesign
              name="message1"
              color={focused.color}
              size={focused.size}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: (focused, color, size) => (
            <Ionicons
              name="ios-settings"
              color={focused.color}
              size={focused.size}
            />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};
