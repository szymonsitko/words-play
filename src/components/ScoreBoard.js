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
    borderWidth: 2.5,
    borderColor: '#003cb3',
    backgroundColor: '#001a4d',
    marginTop: 12,
    padding: 12,
  },
  gameBriefStyle: {
    margin: 2,
    fontFamily: 'Hind',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    padding: 2
  },
  resultLineStyle: {
    fontFamily: 'Hind',
    color: 'white',
    fontSize: 14,
    margin: 4
  }
}
