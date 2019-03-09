import React from 'react';
import { connect } from 'react-redux';

import DeckList from './../components/DeckList';
import DeleteAllDecksButton from './../components/DeleteAllDecksButton';
import AddNewDeckButton from './../components/AddNewDeckButton';
import ScreenInfo from './../components/ScreenInfo';
import ScreenTitle from './../components/ScreenTitle';
import ScreenContainer from '../components/ScreenContainer';
import ScreenContent from '../components/ScreenContent';

class DecksScreen extends React.Component {
  static navigationOptions = {
    header: <ScreenTitle>Decks</ScreenTitle>
  };

  render() {
    const { decksCount } = this.props;
    return (
      <ScreenContainer>
        <ScreenContent>
          <DeckList />

          <AddNewDeckButton />
          <DeleteAllDecksButton />
        </ScreenContent>
        <ScreenInfo>
          You have {decksCount} deck{decksCount !== 1 ? 's' : ''}
        </ScreenInfo>
      </ScreenContainer>
    );
  }
}

const stateToProps = state => ({
  decksCount: Object.keys(state.decks).length
});

export default connect(stateToProps)(DecksScreen);
