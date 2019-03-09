import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './../components/TabBarIcon';
import DecksScreen from './../screens/DecksScreen';
import DeckScreen from './../screens/DeckScreen';
import NewDeckScreen from './../screens/NewDeckScreen';
import NewCardScreen from './../screens/NewCardScreen';
import QuizScreen from './../screens/QuizScreen';

import { RouteNames } from './../navigation/routes';

const DecksStack = createStackNavigator({
  [RouteNames.Decks]: DecksScreen,
  [RouteNames.Deck]: DeckScreen,
  [RouteNames.NewCard]: NewCardScreen,
  [RouteNames.Quiz]: QuizScreen
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
