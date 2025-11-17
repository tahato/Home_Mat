import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Bill from '../../screens/Bill/Bill';
import Project from '../../screens/Project/Project';
import Images from '../../screens/Imags/Images';
import ThreeD from '../../screens/ThreeD/ThreeD';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../context/GlobaleProvider';
export default function ProjectNavigation({ route }) {
  const Tabs = createMaterialTopTabNavigator();
  const { id, client } = route.params;
  const { setClient } = useGlobalContext();
  const firstLoading = useRef(false);

  useEffect(() => {
    setClient(client);
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#A79373', //add to colors
        tabBarScrollEnabled: false,
        tabBarPressColor: 'white',
        tabBarStyle: {
          backgroundColor: '#EEE8D6',
          justifyContent: 'center',
          alignContent: 'center',
          height: 40,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          height: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
          zIndex: 10,
        },
        swipeEnabled: false,
      }}
      screenListeners={{
        tabPress: e => {
          if (!firstLoading.current) e.preventDefault();
        },
      }}
    >
      <Tabs.Screen
        name="Plan"
        component={Project}
        initialParams={{ id, firstLoading }}
      />
      <Tabs.Screen name="Facture" component={Bill} />
      <Tabs.Screen name="Images" component={Images} />
      <Tabs.Screen name="3 D" component={ThreeD} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
