import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';
import SystemScreen from '../pages/System';

// Config
import TabConfig from '../config/TabBar';

// Config Icon
import IconHome from '../config/Screens/Home';
import IconSystem from '../config/Screens/Orbit';
import IconDetails from '../config/Screens/Details';

function Route() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer initialRouteName="Home">
      <Tabs.Navigator tabBarOptions={TabConfig}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => IconHome(focused),
          }}
        />
        <Tabs.Screen
          name="System"
          component={SystemScreen}
          options={{
            tabBarIcon: ({ focused }) => IconSystem(focused),
          }}
        />
        <Tabs.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ focused }) => IconDetails(focused),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Route;
