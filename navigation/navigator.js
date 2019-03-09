import { NavigationActions } from 'react-navigation';

import { RouteNames } from './routes';

const navigateToDecks = component => {
  navigateTo(RouteNames.Decks, component);
};

const navigateToNewDeck = component => {
  navigateTo(RouteNames.NewDeck, component);
};

const navigateTo = (route, component) => {
  component.props.navigation.dispatch(
    NavigationActions.navigate({
      routeName: route
    })
  );
};

const Navigator = {
  navigateToDecks,
  navigateToNewDeck
};

export default Navigator;
