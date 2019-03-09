import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import RobotIcon from '../components/RobotIcon';
import ScreenTitle from '../components/ScreenTitle';
import ScreenInfo from '../components/ScreenInfo';

export default class DecksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <ScreenTitle>Decks</ScreenTitle>
          <RobotIcon />
        </ScrollView>

        <ScreenInfo>You have 0 decks</ScreenInfo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  }
});
