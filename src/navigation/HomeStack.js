import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home';
import {ProductScreen} from '../screens/Product';
import {CategoryScreen} from '../screens/Category';

const Stack = createStackNavigator();

export function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({route}) => ({
          headerBackTitleVisible: false,
          title: route.params.category.name,
        })}
      />
    </Stack.Navigator>
  );
}
