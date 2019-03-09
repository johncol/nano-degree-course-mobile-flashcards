import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const RobotIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/robot-dev.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  }
});

export default RobotIcon;
