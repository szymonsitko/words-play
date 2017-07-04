import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';

class Result extends Component {
  resetGame() {
    // Here, all user data will be deleted & user will be sent to the main screen
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultsLabel}>You <Text style={styles.result}>{this.props.userWon ? 'won' : 'lost'}</Text> the game!</Text>
        <Text>Game Brief details</Text>
        <Text>Your score to achieve: {this.props.scoreTarget} points</Text>
        <Text>Total game time: {this.props.timeTotal} second(s)</Text>
        <Text>Time used overall: {this.props.timeTotal - this.props.timeLeft} second(s)</Text>
        <Text style={styles.tryAgainLabel} onPress={this.resetGame}>Try again</Text>
        <Text style={styles.quitLabel} onPress={() => {BackHandler.exitApp()} }>Quit</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ result }) => {
  return result;
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99bbff',
  },
  resultsLabel: {
    marginTop: 10,
    fontSize: 28,
    backgroundColor: '#ffeb99',
    fontFamily: 'Special-Elite',
    color: 'black',
    textAlign: 'center'
  },
  result: {
    backgroundColor: '#db70b8',
  },
  tryAgainLabel: {
    marginTop: 10,
    fontFamily: 'Special-Elite',
    fontSize: 32,
    backgroundColor: '#85e085',
    color: 'black',
    textAlign: 'center',
  },
  quitLabel: {
    marginTop: 10,
    fontFamily: 'Special-Elite',
    fontSize: 32,
    backgroundColor: '#ff4d4d',
    color: 'black',
    textAlign: 'center',
  }

}

export default connect(mapStateToProps)(Result);
