import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import Navigator from './../navigation/navigator';

class StartQuizButton extends Component {
  navigateToQuizScreen = () => {
    const { deck } = this.props;
    Navigator.navigateToQuiz(this, deck);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Start quiz" onPress={this.navigateToQuizScreen} type="solid" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const stateToProps = (state, props) => ({
  ...props
});

export default withNavigation(connect(stateToProps)(StartQuizButton));
