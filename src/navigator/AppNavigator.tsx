import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Puzzle, Thankyou, LeaderShip} from '../screens';
import {hide as hideSplashScreen} from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      onReady={async () => await hideSplashScreen({fade: true})}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PuzzleScreen"
          component={Puzzle}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ThankyouScreen"
          component={Thankyou}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LeaderShipScreen"
          component={LeaderShip}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
