import React from 'react';

import { View, StyleSheet } from 'react-native';

const QuizButtonsContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default QuizButtonsContainer;
