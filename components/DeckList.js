import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    return (
      <ScrollView>
        {decks.map(deck => (
          <DeckListItem deck={deck} key={deck.id} />
        ))}
      </ScrollView>
    );
  }
}

const decksFrom = state => Object.values(state.decks);
const byIdInDescendingOrder = (deck1, deck2) => deck2.id - deck1.id;

const stateToProps = state => ({
  decks: decksFrom(state).sort(byIdInDescendingOrder)
});

export default connect(stateToProps)(DeckList);
