import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{title: 'Signup', headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Dashboard', headerLeft: () => null}}
        />
         <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Recipe Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
