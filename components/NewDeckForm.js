import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { DeckAction } from './../state/actions/deck';

class NewDeckForm extends Component {
  state = {
    deckName: ''
  };

  updateDeckName = deckName => {
    this.setState({ deckName });
  };

  createDeck = () => {
    const { deckName } = this.state;
    const { createDeck } = this.props;
    createDeck(deckName);
    this.setState({ deckName: '' });
  };

  render() {
    const { deckName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            label="Deck name"
            placeholder="e.g. Game of Thrones trivia"
            onChangeText={this.updateDeckName}
            value={deckName}
          />
        </View>
        <Button
          title="Create"
          onPress={this.createDeck}
          disabled={deckName.trim() === ''}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    marginBottom: 30
  }
});

const dispatchToProps = dispatch => ({
  createDeck: name => {
    dispatch(DeckAction.createDeck(name));
  }
});

export default connect(
  undefined,
  dispatchToProps
)(NewDeckForm);
