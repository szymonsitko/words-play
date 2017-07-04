import React from 'react';
import { View, Text } from 'react-native';

export const ScoreBoard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameBriefStyle}>Game Brief details</Text>
      <Text style={styles.resultLineStyle}>Your score to achieve: {props.scoreTarget} points</Text>
      <Text style={styles.resultLineStyle}>Total game time: {props.timeTotal} second(s)</Text>
      <Text style={styles.resultLineStyle}>Time used overall: {props.timeTotal - props.timeLeft} second(s)</Text>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: 'pink',
    borderRadius: 4,
    borderWidth: 2.5,
    borderColor: '#ff6666',
    padding: 8
  },
  gameBriefStyle: {
    fontFamily: 'Special-Elite',
    textAlign: 'center',
    fontSize: 16,
    padding: 2
  },
  resultLineStyle: {
    fontFamily: 'Special-Elite',
    fontSize: 12,
    margin: 2
  }
}
