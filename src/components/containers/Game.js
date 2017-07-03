import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { scoreCalculator, timeCalculator, tagGenerator } from '../../lib/ScoreCalculator';

class Game extends Component {
  state = {
    countdownTime: timeCalculator(scoreCalculator(this.props.cleanInput)),
    scoreToWin: scoreCalculator(this.props.cleanInput),
    renderCounterLabels: false,
    preCounter: 'Ready...',
    passedInput: false
  }

  componentWillMount() {
    this.preCountingMessage();
  }

  resultCheck() {
    this.state.inputText == this.state.scoreToWin ? this.stopCountdownTimer() : !this.stopCountdownTimer();
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
          preCounter: 'Go!'
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
          this.stopCountdownTimer(this.state.timer);
        }
      }, 1000)
    })


  }

  stopCountdownTimer() {
    clearInterval(this.state.timer);
  }

  renderHint() {
    let renderTag = '';
    if (!this.state.inputText || this.state.inputText.length > 0) {
      if (this.state.passedInput) {
        !isNaN(this.state.inputText) ? renderTag = <Text>{tagGenerator(this.state.scoreToWin, this.state.inputText)}</Text> : renderTag = <Text style={{ color: 'red' }}>This is not a number, sorry!</Text>;
      } else {
        renderTag = <Text>Give it a shot right now!</Text>;
      }
    }
    return renderTag;
  }

  renderCounterLabels() {
    return (
      <View>
        <Text style={styles.gameLabel}>Counter has started!</Text>
        <Text style={styles.insertedText}>{this.props.inputText}</Text>
        <Text style={styles.counter}> Just {this.state.countdownTime} seconds left!</Text>
        <TextInput onChangeText={(text) => {this.setState({inputText: text, passedInput: true}); this.resultCheck()}}/>
        {this.renderHint()}
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>{this.state.preCounter}</Text>
        {this.state.renderCounterLabels ? this.renderCounterLabels() : !this.renderCounterLabels()}
      </View>
    );
  };
}

const styles = {
  gameLabel: {

  },
  counter: {

  },
  insertedText: {

  }
}

const mapStateToProps = ({ game }) => {
  return game;
}

export default connect(mapStateToProps)(Game);

// Clean timer code snippet

// let timer = setInterval(() => {
//   this.setState({ countdownTime: this.state.countdownTime - 1 });
//   if (this.state.countdownTime <= 0) {
//     this.stopCountdownTimer(timer);
//   }
// }, 1000);
