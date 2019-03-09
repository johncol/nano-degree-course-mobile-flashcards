import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { CardAction } from './../state/actions/card';
import Navigator from './../navigation/navigator';

class NewCardForm extends Component {
  state = {
    question: '',
    answer: ''
  };

  updateField = (name, value) => {
    this.setState({ [name]: value });
  };

  createCard = () => {
    const { question, answer } = this.state;
    const { createCard, deck } = this.props;
    createCard(deck, question.trim(), answer.trim());
    this.setState({
      question: '',
      answer: ''
    });
    Navigator.navigateToDeck(this, deck);
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            label="Question"
            placeholder="e.g. Who won the Battle of the Bastards?"
            onChangeText={value => this.updateField('question', value)}
            value={question}
          />
        </View>
        <View style={styles.input}>
          <Input
            label="Answer"
            placeholder="e.g. Jon Snow"
            onChangeText={value => this.updateField('answer', value)}
            value={answer}
          />
        </View>
        <Button
          title="Create"
          onPress={this.createCard}
          disabled={question.trim() === '' || answer.trim() === ''}
        />
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

const dispatchToProps = dispatch => ({
  createCard: (deck, question, answer) => {
    dispatch(CardAction.createCard(deck, question, answer));
  }
});

export default withNavigation(
  connect(
    undefined,
    dispatchToProps
  )(NewCardForm)
);
