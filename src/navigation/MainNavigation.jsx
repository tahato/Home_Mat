import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalProvider from '../context/GlobaleProvider';
import index from '../index';
import Login from '../screens/login/Login';
import HomeNavigation from '../navigation/HomeNavigation/HomeNavigation';
import ProjectNavigation from '../navigation/ProjectNavigation/ProjectNavigation';
import Mainheader from '../components/headers/Mainheader';
import HeaderProject from '../components/headers/HeaderProject';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="Index" component={index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{
              headerTitle: '',
              header: () => <Mainheader />,
            }}
          />
          <Stack.Screen
            name="ProjectNavigation"
            component={ProjectNavigation}
            options={{
              headerTitle: '',
              header: () => <HeaderProject />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({});
