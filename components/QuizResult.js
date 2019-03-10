import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

import ButtonsContainer from './ButtonsContainer';
import QuizScore from './QuizScore';
import Navigator from './../navigation/navigator';
import { DeckAction } from '../state/actions/deck';

class QuizResult extends React.Component {
  componentDidMount() {
    const { deckId, updateLastQuizDate } = this.props;
    updateLastQuizDate(deckId);
  }

  goToDeck = () => {
    Navigator.goBack(this);
  };

  render() {
    const { score, cardsCount, onRestart: restartQuiz } = this.props;
    return (
      <View>
        <QuizScore score={score} total={cardsCount} />

        <ButtonsContainer height={100}>
          <Button title="Try again" onPress={restartQuiz} />
          <Button title="Go back to deck" onPress={this.goToDeck} />
        </ButtonsContainer>
      </View>
    );
  }
}

const dispatchToProps = dispatch => ({
  updateLastQuizDate: deckId => dispatch(DeckAction.updateLastQuizDate(deckId))
});

export default withNavigation(
  connect(
    undefined,
    dispatchToProps
  )(QuizResult)
);
