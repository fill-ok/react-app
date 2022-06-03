import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomNavigator } from '@react-navigation/bottom-tabs';

// import screens
import HomeScreen from './navbar/home';
import FitnessScreen from './navbar/fitness';
import ErnaehrungsScreen from './navbar/ernährung';
import RückenScreen from './navbar/rücken';
import KalenderScreen from './navbar/kalender';
import EinstellungsScreen from './navbar/einstellungen';

const Tab = createBottomNavigator();

export default function() {
  return(
    <NavigationContainer>
      <Tab.Navgator>
        <Tab.Screen name='Home' component={ HomeScreen }></Tab.Screen>
      </Tab.Navgator>
    </NavigationContainer>
  );
}

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'center',
    alignItems: 'center',
    justifyContent: ' center'
  },
});

##################### screens ##################################
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

############### screens #################################################

import React, { Component } from "react";
import { View, Text } from 'react-native';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export default HomeScreen;
