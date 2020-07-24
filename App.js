import React from 'react';

import ClientScreen from './screens/ClientScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen}  options={{
                  title: 'Clients',
                  headerTintColor: '#2A86FF',
                  headerStyle: {
                      elevation: 0.5,
                      shadowOpacity: 0.5,
                  }
              }} />
              <Stack.Screen name="CartClient" component={ClientScreen} options={{
                  title: 'Client Cart',
                  headerTintColor: '#2A86FF',
                  }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}




