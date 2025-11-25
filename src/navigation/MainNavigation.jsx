import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalProvider from '../context/GlobaleProvider';
import Index from '../Index';
import Login from '../screens/login/Login';
import HomeNavigation from '../navigation/HomeNavigation/HomeNavigation';
import ProjectNavigation from '../navigation/ProjectNavigation/ProjectNavigation';
import ShippedBills from '../screens/ShippedBills';
import Mainheader from '../components/headers/Mainheader';
import HeaderProject from '../components/headers/HeaderProject';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={Index}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
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
          <Stack.Screen
            name="ShippedBills"
            component={ShippedBills}
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
