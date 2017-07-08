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
    borderWidth: 4,
    borderColor: '#003cb3',
    backgroundColor: '#001a4d',
    marginTop: 18,
    marginBottom: 8,
    padding: 14
  },
  gameBriefStyle: {
    margin: 4,
    fontFamily: 'Hind',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 4,
    fontWeight: 'bold'
  },
  resultLineStyle: {
    fontFamily: 'Hind',
    color: 'white',
    fontSize: 16,
    margin: 4
  },
  goodLuckMessage: {
    fontFamily: 'Hind',
    color: 'white',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  }
}
