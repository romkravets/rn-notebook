import React from 'react';

import ClientScreen from './screens/ClientScreen';
import HomeScreen from './screens/HomeScreen';
import AddAppointmentScreen from './screens/AddAppointmentScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddClientScreen from "./screens/AddClientScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen}  options={{
                  title: 'Клієнти',
                  headerTintColor: '#2A86FF',
                  headerStyle: {
                      elevation: 0.5,
                      shadowOpacity: 0.5,
                  }
              }} />
              <Stack.Screen name="CartClient" component={ClientScreen} options={{
                  title: 'Карта Клієнта',
                  headerTintColor: '#2A86FF',
                  }}/>
              <Stack.Screen name="AddClient" component={AddClientScreen} options={{
                  title: 'Додати Клієнта',
                  headerTintColor: '#2A86FF',
              }}/>
                <Stack.Screen name="AddAppointment" component={AddAppointmentScreen} options={{
                  title: 'Додати Запис',
                  headerTintColor: '#2A86FF',
              }}/>
              
          </Stack.Navigator>
      </NavigationContainer>
  );
}




