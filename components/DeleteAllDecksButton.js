import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { DeckAction } from '../state/actions/deck';
import { CardAction } from '../state/actions/card';

class DeleteAllDecksButton extends Component {
  render() {
    const { hasZeroDecks, deleteAllDecks } = this.props;
    if (hasZeroDecks) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Button title="Delete all decks" onPress={deleteAllDecks} type="outline" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20
  }
});

const stateToProps = state => ({
  hasZeroDecks: Object.keys(state.decks).length === 0
});

const dispatchToProps = dispatch => ({
  deleteAllDecks: () => {
    dispatch(DeckAction.deleteAllDecks());
    dispatch(CardAction.deleteAllCards());
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(DeleteAllDecksButton);
