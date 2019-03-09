import React from 'react';

import { View, StyleSheet } from 'react-native';

const DeckButtonsContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 60,
    height: 200,
    justifyContent: 'space-between'
  }
});

export default DeckButtonsContainer;
