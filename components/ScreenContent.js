import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

const ScreenContent = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default ScreenContent;
