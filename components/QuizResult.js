import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

import ButtonsContainer from './ButtonsContainer';
import QuizScore from './QuizScore';
import Navigator from './../navigation/navigator';

class QuizResult extends React.Component {
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

export default withNavigation(QuizResult);
