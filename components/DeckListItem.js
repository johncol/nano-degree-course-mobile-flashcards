import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Navigator from './../navigation/navigator';

class DeckListItem extends Component {
  navigateToDeckScreen = () => {
    const { deck } = this.props;
    Navigator.navigateToDeck(this, deck);
  };

  render() {
    const { deck } = this.props;
    const cardsCount = deck.cards.length;
    return (
      <ListItem
        title={deck.name}
        subtitle={'Created on ' + deck.creationDate}
        rightTitle={cardsCount + ' card' + (cardsCount !== 1 ? 's' : '')}
        chevron={true}
        onPress={this.navigateToDeckScreen}
      />
    );
  }
}

export default withNavigation(DeckListItem);
