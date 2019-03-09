import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DecksScreen from '../screens/DecksScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

import { RouteNames } from './../navigation/routes';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="md-information-circle" />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-link" />
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-options" />
};

const DecksStack = createStackNavigator({
  [RouteNames.Decks]: DecksScreen
});
DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />
};

const NewDeckStack = createStackNavigator({
  [RouteNames.NewDeck]: NewDeckScreen
});
NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />
};

export default createBottomTabNavigator({
  DecksStack,
  NewDeckStack
});
