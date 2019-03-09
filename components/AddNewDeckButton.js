import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions, withNavigation } from 'react-navigation';

import { RouteNames } from './../navigation/routes';

class AddNewDeckButton extends Component {
  navigateToNewDeckScreen = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: RouteNames.NewDeck
      })
    );
  };

  render() {
    const { hasAtLeastOneDeck } = this.props;
    if (hasAtLeastOneDeck) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Button
          title="Add new deck"
          onPress={this.navigateToNewDeckScreen}
          type="clear"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const stateToProps = state => ({
  hasAtLeastOneDeck: Object.keys(state.decks).length > 0
});

export default withNavigation(connect(stateToProps)(AddNewDeckButton));
