import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import Navigator from './../navigation/navigator';

class AddNewCardButton extends Component {
  navigateToNewCardScreen = () => {
    const { deck } = this.props;
    Navigator.navigateToNewCard(this, deck);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Add new card"
          onPress={this.navigateToNewCardScreen}
          type="outline"
        />
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

export default withNavigation(AddNewCardButton);
