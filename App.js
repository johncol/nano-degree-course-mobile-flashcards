import React from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import AppLoading from './components/AppLoading';

import { SharedAction } from './state/actions/shared';
import store from './state/store';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <AppLoading handleFinishLoading={this.handleFinishLoading} />;
    } else {
      return (
        <Provider store={store}>
          <ConnectedApp />
        </Provider>
      );
    }
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

class ProvidedApp extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff'
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const ConnectedApp = connect(
  undefined,
  dispatch => ({
    loadInitialData: () => dispatch(SharedAction.loadInitialData())
  })
)(ProvidedApp);
