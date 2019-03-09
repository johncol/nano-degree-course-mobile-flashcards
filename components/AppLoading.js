import React, { Component } from 'react';
import { AppLoading as ExpoAppLoading, Asset, Font, Icon } from 'expo';

class AppLoading extends Component {
  render() {
    return (
      <ExpoAppLoading
        startAsync={this.loadResourcesAsync}
        onError={this.handleLoadingError}
        onFinish={this.props.handleFinishLoading}
      />
    );
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./../assets/images/robot-dev.png'),
        require('./../assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./../assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  handleLoadingError = error => {
    console.warn(error);
  };
}

export default AppLoading;
