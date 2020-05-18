import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/Cart';
import {ProductScreen} from '../screens/Product';
import {CheckoutScreen} from '../screens/Checkout';

const Stack = createStackNavigator();

export function CartStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
