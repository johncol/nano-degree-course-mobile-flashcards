import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScreenTitle = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 40,
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 60
  }
});

export default ScreenTitle;
