import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
