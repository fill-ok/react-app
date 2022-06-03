import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View, Icon, StyleSheet, Animated, Component, TouchableOpacity} from 'react-native';

// import screens
import HomeScreen from './home';
import FitnessScreen from './fitness';
import ErnaehrungsScreen from './ernährung';
import RueckenScreen from './rücken';
import KalenderScreen from './kalender';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

var iconSize = 20;

const Tab = createBottomTabNavigator()

    const Tabs = ()  => {
      return(
       <Tab.Navigator
       screenOptions={{
        tabBarItemStyle: {
         borderRadius: 40
            //...styles.shadow
        },
        tabBarStyle:{
            display:  'flex'
        },
        showLabel: false,
    }}>
          <Tab.Screen name='Home' component={ HomeScreen } options={{
              tabBarIcon: ({focused}) => (
                  <View>
                      <FontAwesome5Icon
                      name={ focused ? 'home' : 'home' }
                      size={ iconSize }
                      color={ focused ? '#ff05b4' : 'gray' }  />
                  </View>
              ),
          }}/>
          <Tab.Screen name='Fintess' component={ FitnessScreen } options={{
              tabBarIcon: ({focused}) => (
                  <View style={{
                    alignItems:'center',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: 'red',
                    justifyContent:'center',
                  }}>
                      <FontAwesome5Icon
                      name={ focused ? 'home' : 'home' }
                      size={ iconSize }
                      color={ focused ? '#ff05b4' : 'gray' }  />
                  </View>
              ),
            }}/>
          <Tab.Screen name='Ernährung' component={ ErnaehrungsScreen } options={{
              tabBarIcon: ({focused}) => (
                  <View>
                      <FontAwesome5Icon
                      name={ focused ? 'home' : 'home' }
                      size={ iconSize }
                      color={ focused ? '#ff05b4' : 'gray' }  />
                  </View>
              ),
            }}/>
          <Tab.Screen name='Rücken' component={ RueckenScreen } options={{
              tabBarIcon: ({focused}) => (
                  <View>
                      <FontAwesome5Icon
                      name={ focused ? 'home' : 'home' }
                      size={ iconSize }
                      color={ focused ? '#ff05b4' : 'gray' }  />
                  </View>
              ),
            }}/>
          <Tab.Screen name='Kalender' component={ KalenderScreen } options={{
              tabBarIcon: ({focused}) => (
                  <View>
                      <FontAwesome5Icon
                      name={ focused ? 'home' : 'home' }
                      size={ iconSize }
                      color={ focused ? '#ff05b4' : 'gray' }  />
                  </View>
              ),
            }}/>
        </Tab.Navigator>
      );
    }

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default Tabs;

###################### app.js #########################################

import React, { useRef } from 'react';
import { Button, Text, View, Icon, StyleSheet, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import styles from './styles/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import screens
import Tabs from './navbar/tabs';
import HomeStack from './navbar/homestack';


var iconSize = 22;

const App = () => {
  return(
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

const tabStyles = StyleSheet.create({
  tabBarBorderRadius: {
    alignItems:'center',
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent:'center',
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
}
});
export default App;

