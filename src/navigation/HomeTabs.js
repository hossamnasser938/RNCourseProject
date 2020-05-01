import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {IonIcon} from '../components/IonIcon';
import {TINT_COLOR} from '../utils/colors';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconName = {
          Home: 'home',
          Cart: 'cart',
          Search: 'search',
          Account: 'person',
        };

        const label = {
          Home: 'Shop',
          Cart: 'Cart',
          Search: 'Search',
          Account: 'Account',
        };

        return {
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={iconName[route.name]}
              style={{color: focused ? TINT_COLOR : 'black', fontSize: 24}}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? TINT_COLOR : 'black', fontSize: 18}}>
              {label[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen name="Home" component={() => <Text>Home</Text>} />
      <Tabs.Screen name="Cart" component={() => <Text>Cart</Text>} />
      <Tabs.Screen name="Search" component={() => <Text>Search</Text>} />
      <Tabs.Screen name="Account" component={() => <Text>Account</Text>} />
    </Tabs.Navigator>
  );
}
