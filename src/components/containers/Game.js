import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scoreCalculator, timeCalculator, tagGenerator } from '../../lib/ScoreCalculator';
import { sleep } from '../../lib/Sleep';

const { width, height } = Dimensions.get('window');
const INITIAL_STATE = {

};

class Game extends Component {
  state = {
    countdownTime: 'x',
    scoreToWin: scoreCalculator(this.props.cleanInput),
    renderCounterLabels: false,
    preCounter: 'Ready...',
    passedInput: false,
  }

  componentWillMount() {
    this.preCountingMessage();
  }

  goToResultsPage() {
    sleep(1500).then(() => {
      Actions.result();
    });
  }

  resultCheck(text) {
    if (this.state.scoreToWin == text) {
      this.stopCountdownTimer();
      this.setState({ preCounter: 'You won!' });
      this.goToResultsPage();
    };
  }

  preCountingMessage() {
    this.setState({ readySetGoCounter: 2 });
    let timer = setInterval(() => {
      this.setState({ readySetGoCounter: this.state.readySetGoCounter - 1 });
      if (this.state.readySetGoCounter === 1) {
        this.setState({ preCounter: 'Set...' });
      }
      if (this.state.readySetGoCounter === 0) {
        this.setState({
          renderCounterLabels: true,
          preCounter: 'Go!',
          countdownTime: timeCalculator(scoreCalculator(this.props.cleanInput))
        });
        this.startCountdownTimer();
      }
    }, 1000);
  }

  startCountdownTimer() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ countdownTime: this.state.countdownTime - 1 });
        if (this.state.countdownTime <= 0) {
          this.stopCountdownTimer();
          this.setState({ preCounter: 'You lost!' });
          // Do something on fail state!
          //
          this.goToResultsPage();
        }
      }, 1000)
    });
  }

  stopCountdownTimer() {
    clearInterval(this.state.timer);
  }

  renderHint() {
    let renderTag = '';
    if (!this.state.inputText || this.state.inputText.length > 0) {
      if (this.state.passedInput) {
        !isNaN(this.state.inputText) ? renderTag = <Text style={styles.hintLabel}>{tagGenerator(this.state.scoreToWin, this.state.inputText)}</Text> : renderTag = <Text style={{ ...styles.hintLabel, color: 'red' }}>This is not a number, sorry!</Text>;
      } else {
        renderTag = <Text style={styles.hintLabel}>Give it a shot right now!</Text>;
      }
    }
    return renderTag;
  }

  renderCounterLabels() {
    return (
      <View>
        <Text style={styles.insertedText}>You have inserted: {this.props.inputText}</Text>
        <TextInput onChangeText={(text) => {this.setState({inputText: text, passedInput: true}); this.resultCheck(text); }}/>
        {this.renderHint()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.preCounterLabel}>{this.state.preCounter}</Text>
        {this.state.renderCounterLabels ? this.renderCounterLabels() : !this.renderCounterLabels()}
        <Text style={styles.counterLabel}> Just {this.state.countdownTime} seconds left!</Text>
      </View>
    );
  };
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99bbff',
  },
  hintLabel: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: height *.005,
    marginTop: height *.005,
  },
  counterLabel: {
    position: 'absolute',
    fontFamily: 'Special-Elite',
    backgroundColor: '#ffeb99',
    padding: 4,
    fontSize: 24,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'black',
    textAlign: 'center'
  },
  insertedText: {
    fontFamily: 'Special-Elite',
    fontSize: 22,
    color: 'black',
    backgroundColor: '#db70b8',
  },
  preCounterLabel: {
    fontFamily: 'Special-Elite',
    textAlign: 'center',
    fontSize: 42,
    color: 'black',
    marginTop: height * .05,
    marginBottom: height * .05,
    backgroundColor: '#ff4d4d'
  }
}

const mapStateToProps = ({ game }) => {
  return game;
}

export default connect(mapStateToProps)(Game);
