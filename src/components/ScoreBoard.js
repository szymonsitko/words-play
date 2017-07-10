import React from 'react';
import { View, Text } from 'react-native';

export const ScoreBoard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameBriefStyle}>Game Brief details</Text>
      <Text style={styles.resultLineStyle}>Your score to achieve: {props.scoreTarget} points</Text>
      <Text style={styles.resultLineStyle}>Total game time: {props.timeTotal} second(s)</Text>
      <Text style={styles.resultLineStyle}>Time used overall: {props.timeTotal - props.timeLeft} second(s)</Text>
      <Text style={styles.goodLuckMessage}>Good luck next time!</Text>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 18,
    marginBottom: 8,
    padding: 14
  },
  gameBriefStyle: {
    marginBottom: 12,
    fontFamily: 'Hind',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    padding: 4,
    fontWeight: 'bold'
  },
  resultLineStyle: {
    fontFamily: 'Hind',
    color: 'black',
    fontSize: 16,
    margin: 4
  },
  goodLuckMessage: {
    fontFamily: 'Hind',
    color: 'black',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  }
}
