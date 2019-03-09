import React from 'react';
import { connect } from 'react-redux';

import ScreenInfo from './../components/ScreenInfo';
import ScreenTitle from './../components/ScreenTitle';
import ScreenContainer from './../components/ScreenContainer';
import ScreenContent from './../components/ScreenContent';
import DeckName from './../components/DeckName';
import QuizResult from './../components/QuizResult';
import QuizQuestion from './../components/QuizQuestion';

class QuizScreen extends React.Component {
  static navigationOptions = {
    header: <ScreenTitle>Quiz</ScreenTitle>
  };

  state = {
    cardIndex: 0,
    score: 0,
    allCardsAnswered: false
  };

  nextCard = () => {
    const { cardsCount } = this.props;
    this.setState(state => {
      const cardIndex = state.cardIndex + 1;
      if (cardIndex === cardsCount) {
        return { allCardsAnswered: true };
      } else {
        return { cardIndex: state.cardIndex + 1 };
      }
    });
  };

  incrementScore = () => {
    this.setState(state => ({
      score: state.score + 1
    }));
  };

  restartQuiz = () => {
    this.setState({
      cardIndex: 0,
      score: 0,
      allCardsAnswered: false
    });
  };

  render() {
    const { deck, cardsCount } = this.props;
    const { cardIndex, score, allCardsAnswered } = this.state;
    return (
      <ScreenContainer>
        <ScreenContent>
          <DeckName>{deck.name}</DeckName>

          {allCardsAnswered && (
            <QuizResult
              score={score}
              cardsCount={cardsCount}
              onRestart={this.restartQuiz}
            />
          )}

          {!allCardsAnswered && (
            <QuizQuestion
              deck={deck}
              cardIndex={cardIndex}
              incrementScore={this.incrementScore}
              nextCard={this.nextCard}
            />
          )}
        </ScreenContent>
        <ScreenInfo>
          Card {cardIndex + 1} out of {cardsCount}
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

export default connect(stateToProps)(QuizScreen);
