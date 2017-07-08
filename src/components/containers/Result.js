import React, { Component } from 'react';
import { View, Text, BackHandler, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { resetUserScoreData } from '../../actions'
import { ScoreBoard } from '../ScoreBoard';
import Navigation from '../Navigation';
import { NAVBAR_COLORS } from '../../constants/constants';

const { width, height } = Dimensions.get('window');

class Result extends Component {
  resetGame() {
    this.props.resetUserScoreData();
    Actions.init();
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation
          label="Game Results"
          colors={NAVBAR_COLORS}
        />
        <Text style={styles.resultsLabel}>You <Text style={styles.result}>{this.props.userWon ? 'won' : 'lost'}</Text> the game!</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 58 }}>
          <ScoreBoard
            scoreTarget={this.props.scoreTarget}
            timeTotal={this.props.timeTotal}
            timeLeft={this.props.timeLeft}
          />
        </ScrollView>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'row'}}>
          <Text style={styles.tryAgainLabel} onPress={this.resetGame.bind(this)}>Try again</Text>
          <Text style={styles.quitLabel} onPress={() => {BackHandler.exitApp()} }>Quit</Text>
        </View>
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
    backgroundColor: '#ccddff',
  },
  resultsLabel: {
    marginTop: 18,
    marginBottom: 18,
    fontSize: 32,
    backgroundColor: '#ffeb99',
    fontFamily: 'Special-Elite',
    color: 'black',
    textAlign: 'center',
  },
  result: {
    backgroundColor: '#db70b8',
  },
  tryAgainLabel: {
    flex: 1,
    fontFamily: 'Special-Elite',
    backgroundColor: '#ffeb99',
    padding: 10,
    fontSize: 24,
    color: 'black',
    width: width * .5,
    textAlign: 'center',
    padding: 10
  },
  quitLabel: {
    flex: 1,
    fontFamily: 'Special-Elite',
    backgroundColor: '#ff4d4d',
    padding: 10,
    fontSize: 24,
    color: 'black',
    width: width * .5,
    textAlign: 'center',
    padding: 10
  }
}

export default connect(mapStateToProps, { resetUserScoreData })(Result);
