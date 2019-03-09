import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import ButtonsContainer from './ButtonsContainer';
import QuizButtonsContainer from './QuizButtonsContainer';
import QuizButton from './QuizButton';

class QuizQuestion extends Component {
  state = { answerVisible: false };

  showAnswer = () => this.setState({ answerVisible: true });
  hideAnswer = () => this.setState({ answerVisible: false });

  next = () => {
    this.props.nextCard();
    this.hideAnswer();
  };

  incrementAndNext = () => {
    this.props.incrementScore();
    this.next();
  };

  render() {
    const { answerVisible } = this.state;
    const { card } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{card.question}</Text>

        {!answerVisible && (
          <ButtonsContainer>
            <Button title="Show answer" onPress={this.showAnswer} />
          </ButtonsContainer>
        )}

        {answerVisible && (
          <React.Fragment>
            <Text style={styles.answer}>{card.answer}</Text>
            <QuizButtonsContainer>
              <QuizButton title="Correct" onPress={this.incrementAndNext} />
              <QuizButton title="Incorrect" onPress={this.next} />
            </QuizButtonsContainer>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30
  },
  question: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  answer: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    textAlign: 'center'
  }
});

const stateToProps = (state, props) => {
  const cardsIds = props.deck.cards;
  const cards = cardsIds.map(cardId => state.cards[cardId]);
  const card = cards[props.cardIndex];

  return {
    ...props,
    card
  };
};

export default connect(stateToProps)(QuizQuestion);
