import React from 'react';

import NewDeckForm from './../components/NewDeckForm';
import ScreenTitle from './../components/ScreenTitle';
import ScreenInfo from './../components/ScreenInfo';
import ScreenContainer from './../components/ScreenContainer';
import ScreenContent from './../components/ScreenContent';

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScreenContainer>
        <ScreenContent>
          <ScreenTitle>Add a new Deck</ScreenTitle>
          <NewDeckForm />
        </ScreenContent>
        <ScreenInfo>Decks allow you to group cards and take quizzes</ScreenInfo>
      </ScreenContainer>
    );
  }
}
