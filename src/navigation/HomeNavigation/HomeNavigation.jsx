import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Shipping from '../../screens/Shipping/Shipping';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeNavigation() {
  const Tabs = createBottomTabNavigator();
 useEffect(() => {
   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
     BackHandler.exitApp();
     return true;
   });

   return () => backHandler.remove();
 }, []);
  
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarButton: props => (
          <TouchableOpacity
            {...props}
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              width: '100%',
              height: '100%',
            }}
            activeOpacity={0.7}
          />
        ),
        headerShown: false,
        tabBarActiveTintColor: '#293846',
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: '100%',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        },
        tabBarStyle: {
          padding: 0,
          margin: 0,
          // height: 90,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderTopWidth: 0, // remove top border line
        },
        tabBarInactiveTintColor: 'lightgray',
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Shipping"
        component={Shipping}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="truck" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bar-chart" color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
