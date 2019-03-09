import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class QuizButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <Button title={title} onPress={onPress} type="outline" style={styles.button} />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 30,
    paddingRight: 30
  }
});

export default QuizButton;
