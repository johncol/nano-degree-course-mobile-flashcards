import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

class NewDeckForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input label="Deck name" placeholder="e.g. Game of Thrones trivia" />
        </View>
        <Button title="Create" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    marginBottom: 30
  }
});

export default NewDeckForm;
