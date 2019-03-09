import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeckName = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 40
  },
  text: {
    fontSize: 55,
    color: '#919191',
    textAlign: 'center'
  }
});

export default DeckName;
