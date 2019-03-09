import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import ScreenInfo from './../components/ScreenInfo';
import ScreenTitle from './../components/ScreenTitle';
import ScreenContainer from '../components/ScreenContainer';
import ScreenContent from '../components/ScreenContent';
import DeckName from '../components/DeckName';
import DeckButtonsContainer from '../components/DeckButtonsContainer';
import AddNewCardButton from '../components/AddNewCardButton';
import StartQuizButton from '../components/StartQuizButton';

class DeckScreen extends React.Component {
  static navigationOptions = {
    header: <ScreenTitle>Deck</ScreenTitle>
  };

  render() {
    const { deck, cardsCount } = this.props;
    return (
      <ScreenContainer>
        <ScreenContent>
          <DeckName>{deck.name}</DeckName>
          <DeckButtonsContainer>
            <AddNewCardButton deck={deck} />
            <StartQuizButton deck={deck} />
          </DeckButtonsContainer>
        </ScreenContent>
        <ScreenInfo>
          This deck has {cardsCount} card{cardsCount !== 1 ? 's' : ''}
        </ScreenInfo>
      </ScreenContainer>
    );
  }
}

const stateToProps = (state, props) => {
  const { deck } = props.navigation.state.params;
  return {
    deck,
    cardsCount: deck.cards.length
  };
};

export default connect(stateToProps)(withNavigation(DeckScreen));
