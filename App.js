import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {View, StyleSheet, Text, Button} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function MyTabs() {
  return (
    
    <Tab.Navigator
      initialRouteName="Signin"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Signin"
        component={SigninScreen}
        
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        
      />
    </Tab.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="create"
          component={TrackCreateScreen}
        />
        <Stack.Screen name="List" component={TrackListScreen} />
        <Stack.Screen name="user" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
