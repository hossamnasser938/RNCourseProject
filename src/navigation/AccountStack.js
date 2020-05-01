import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../screens/Account';
import {AddAddressScreen} from '../screens/AddAddress';
import {UpdateAccountScreen} from '../screens/UpdateAccount';

const Stack = createStackNavigator();

export function AccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen
        name="UpdateAccountScreen"
        component={UpdateAccountScreen}
      />
    </Stack.Navigator>
  );
}
