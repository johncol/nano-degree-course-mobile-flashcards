import { NavigationActions } from 'react-navigation';

import { RouteNames } from './routes';

const navigateToDecks = component => {
  navigateTo(component, RouteNames.Decks);
};

const navigateToNewDeck = component => {
  navigateTo(component, RouteNames.NewDeck);
};

const navigateToDeck = (component, deck) => {
  navigateTo(component, RouteNames.Deck, { deck });
};

const navigateToNewCard = (component, deck) => {
  navigateTo(component, RouteNames.NewCard, { deck });
};

const navigateToQuiz = (component, deck) => {
  navigateTo(component, RouteNames.Quiz, { deck });
};

const navigateTo = (component, route, params) => {
  component.props.navigation.dispatch(
    NavigationActions.navigate({
      routeName: route,
      params
    })
  );
};

const Navigator = {
  navigateToDecks,
  navigateToNewDeck,
  navigateToDeck,
  navigateToNewCard,
  navigateToQuiz
};

export default Navigator;
