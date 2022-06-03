import React, { Component } from "react";
//import Feed from './src/feed';

// import Navabar Screens
import Home from './navbar/Home';
import Fitness from './navbar/Fitness';
import Ernährung from './navbar/Ernährung';
import Rücken from './navbar/Rücken';
import Kalender from './navbar/Kalender';

// import of Navbar from react
import { NavigationContainer } from '@react-navigation/native';
import { creacteDrawerNavigator } from '@react-navigation/drawer';
import { creacteStackNavigator } from '@react-navigation/stack';
import { creacteMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { creacteMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomNavigator();
const MaterialTopTabs = createMaterialTopNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component= { Home }/>
          <Drawer.Screen name="Fitness" component= { Fitness } />
          <Drawer.Screen name="Ernährung" component= { Ernährung }/>
          <Drawer.Screen name="Rücken" component= { Rücken }/>
          <Drawer.Screen name="Kalender" component= { Kalender }/>
        </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}

##############################
import React, { useRef } from 'react';
import { Button, Text, View, Icon, StyleSheet, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';

// tabBar fluid
// Javascript
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
// Typescript
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions // optional
} from 'react-native-animated-nav-tab-bar'

// import styles
// import styles from './styles/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import screens
import HomeScreen from './navbar/home';
import FitnessScreen from './navbar/fitness';
import ErnaehrungsScreen from './navbar/ernährung';
import RueckenScreen from './navbar/rücken';
import KalenderScreen from './navbar/kalender';

var iconSize = 22;

const Tab = createBottomTabNavigator();

const App = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current

  const  fadeIn  = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start()
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <FontAwesome5
                  name={ focused ? 'home' : 'home' }
                  size={ iconSize }
                  color={ focused ? '#ff05b4' : 'gray' }
                />
              );
            } else if (route.name === 'Fitness') {
              return (
                <FontAwesome5
                  name={ focused ? 'running' : 'running'}
                  size={ iconSize }
                  color={ focused ? '#0811d3' : 'gray' }
                />
              );
            } else if (route.name === 'Ernährung') {
              return (
                <FontAwesome5
                  name={focused ? 'seedling' : 'seedling' }
                  size={iconSize}
                  color={ focused ? '#46f60e' : 'gray' }
                />
              );
            } else if (route.name === 'Rücken') {
              return (
                <FontAwesome5
                  name={ focused ? 'book-medical' : 'book-medical' }
                  size={ iconSize }
                  color={ focused ? '#fff' : 'gray' }
                  style={ styles.button }
                />
              );
            } else if (route.name === 'Kalender') {
              return (
                <FontAwesome5
                  name={ focused ? 'calendar-check' : 'calendar-check' }
                  size={ iconSize }
                  color={ focused ? '#000' : 'gray' }
                />
              );
            }
          },
          //tabBarActiveBackgroundColor: 'gray',
          //tabBarActiveTintColor:  '#ff05b4',
          tabBarInactiveTintColor: 'gray',
          animationEnabled: true,
          tabBarShowLabel: false
        })}
      >
        <Tab.Screen name="Home" style={ styles.button } component={ HomeScreen } onPress={ fadeAnim }/>
        <Tab.Screen name="Fitness" component={ FitnessScreen } />
        <Tab.Screen name="Ernährung" component={ ErnaehrungsScreen } />
        <Tab.Screen name="Rücken" component={ RueckenScreen } />
        <Tab.Screen name="Kalender" component={ KalenderScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      backgroundColor: '#ff05b4',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 30,
      position: 'relative',
  }
});

export default App;

######################### v. 3.0 #####################################################################
import React from 'react';
import { Button, Text, View, Icon, StyleSheet, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import styles
// import styles from './styles/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import screens
import HomeScreen from './navbar/home';
import FitnessScreen from './navbar/fitness';
import ErnaehrungsScreen from './navbar/ernährung';
import RueckenScreen from './navbar/rücken';
import KalenderScreen from './navbar/kalender';

var iconSize = 22;

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <FontAwesome5
                  name={ focused ? 'home' : 'home' }
                  size={ iconSize }
                  color={ focused ? '#ff05b4' : 'gray' }
                />
              );
            } else if (route.name === 'Fitness') {
              return (
                <FontAwesome5
                  name={ focused ? 'running' : 'running'}
                  size={ iconSize }
                  color={ focused ? '#0811d3' : 'gray' }
                />
              );
            } else if (route.name === 'Ernährung') {
              return (
                <FontAwesome5
                  name={focused ? 'seedling' : 'seedling' }
                  size={iconSize}
                  color={ focused ? '#46f60e' : 'gray' }
                />
              );
            } else if (route.name === 'Rücken') {
              return (
                <FontAwesome5
                  name={ focused ? 'book-medical' : 'book-medical' }
                  size={ iconSize }
                  color={ focused ? '#fff' : 'gray' }
                  style={ styles.button }
                />
              );
            } else if (route.name === 'Kalender') {
              return (
                <FontAwesome5
                  name={ focused ? 'calendar-check' : 'calendar-check' }
                  size={ iconSize }
                  color={ focused ? '#000' : 'gray' }
                />
              );
            }
          },
          //tabBarActiveBackgroundColor: 'gray',
          //tabBarActiveTintColor:  '#ff05b4',
          tabBarInactiveTintColor: 'gray',
          animationEnabled: true,
          tabBarShowLabel: false
        })}
      >
        <Tab.Screen name="Home" style={ styles.button } component={ HomeScreen } onPress={ fadeAnim }/>
        <Tab.Screen name="Fitness" component={ FitnessScreen } />
        <Tab.Screen name="Ernährung" component={ ErnaehrungsScreen } />
        <Tab.Screen name="Rücken" component={ RueckenScreen } />
        <Tab.Screen name="Kalender" component={ KalenderScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      backgroundColor: '#ff05b4',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 30,
      position: 'relative',
  }
});

export default App;
