import React from 'react';

import NewCardForm from './../components/NewCardForm';
import ScreenTitle from './../components/ScreenTitle';
import ScreenInfo from './../components/ScreenInfo';
import ScreenContainer from './../components/ScreenContainer';
import ScreenContent from './../components/ScreenContent';

export default class NewCardScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <ScreenContainer>
        <ScreenContent>
          <ScreenTitle>Add a new Card</ScreenTitle>
          <NewCardForm deck={deck} />
        </ScreenContent>
        <ScreenInfo>Cards consist of a question and an answer</ScreenInfo>
      </ScreenContainer>
    );
  }
}
