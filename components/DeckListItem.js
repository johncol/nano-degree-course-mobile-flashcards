import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

class DeckListItem extends Component {
  render() {
    const { deck } = this.props;
    return (
      <ListItem
        title={deck.name}
        subtitle={'Created on ' + deck.creationDate}
        rightTitle={deck.cards.length + ' cards'}
        chevron={true}
      />
    );
  }
}

export default DeckListItem;
