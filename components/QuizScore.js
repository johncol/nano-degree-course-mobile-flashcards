import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuizScore extends React.Component {
  percentage = () => {
    const { score, total } = this.props;
    return ((score / total) * 100).toFixed(2);
  };

  render() {
    const { score, total } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.score}>
          your score was {score} of {total}
        </Text>
        <Text style={styles.percentage}>{this.percentage()}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40
  },
  score: {
    fontSize: 35,
    color: '#919191',
    textAlign: 'center'
  },
  percentage: {
    fontSize: 65,
    color: '#919191',
    textAlign: 'center'
  }
});

export default QuizScore;
