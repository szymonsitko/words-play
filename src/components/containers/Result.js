import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { resetUserScoreData } from '../../actions'
import { ScoreBoard } from '../ScoreBoard';

class Result extends Component {
  resetGame() {
    // Here, all user data will be deleted & user will be sent to the main screen
    this.props.resetUserScoreData();
    Actions.init();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultsLabel}>You <Text style={styles.result}>{this.props.userWon ? 'won' : 'lost'}</Text> the game!</Text>
        <ScoreBoard
          scoreTarget={this.props.scoreTarget}
          timeTotal={this.props.timeTotal}
          timeLeft={this.props.timeLeft}
        />
        <Text style={styles.tryAgainLabel} onPress={this.resetGame.bind(this)}>Try again</Text>
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
    marginBottom: 10,
    fontSize: 28,
    backgroundColor: '#ffeb99',
    fontFamily: 'Special-Elite',
    color: 'black',
    textAlign: 'center',
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

export default connect(mapStateToProps, { resetUserScoreData })(Result);
