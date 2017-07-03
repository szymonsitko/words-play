import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { scoreCalculator, timeCalculator } from '../../lib/ScoreCalculator';

class Game extends Component {
  state = {
    countdownTime: timeCalculator(scoreCalculator(this.props.cleanInput)),
    renderCounterLabels: false,
    preCounter: 'Ready...',
    inputText: ''
  }

  componentWillMount() {
    this.preCountingMessage();
  }

  preCountingMessage() {
    this.setState({ readySetGoCounter: 2 });
    let timer = setInterval(() => {
      this.setState({ readySetGoCounter: this.state.readySetGoCounter - 1 });
      if (this.state.readySetGoCounter === 1) {
        this.setState({ preCounter: 'Set...' });
      }
      if (this.state.readySetGoCounter === 0) {
        this.setState({ preCounter: 'Go!'});
        this.setState({ renderCounterLabels: true });
        this.startCountdownTimer();
      }
    }, 1000);
  }

  startCountdownTimer() {
    let timer = setInterval(() => {
      this.setState({ countdownTime: this.state.countdownTime - 1 });
      if (this.state.countdownTime <= 0) {
        this.stopCountdownTimer(timer);
      }
    }, 1000);
  }

  stopCountdownTimer(timer) {
    clearInterval(timer);
  }

  renderHint() {
    let renderTag = '';
    if (!this.state.inputText || this.state.inputText.length > 0) {
      !isNaN(this.state.inputText) ? renderTag = <Text>Keep on trying...</Text> : renderTag = <Text style={{ color: 'red' }}>This is not a number, sorry!</Text>;
    }
    return renderTag;
  }

  renderCounterLabels() {
    return (
      <View>
        <Text style={styles.gameLabel}>Counter has started!</Text>
        <Text style={styles.insertedText}>{this.props.inputText}</Text>
        <Text style={styles.counter}> Just {this.state.countdownTime} seconds left!</Text>
        <TextInput onChangeText={(text) => this.setState({inputText: text})}/>
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

//
// switch (readySetGoCounter) {
//   case 3:
//     console.log("Counter starts.");
//   case 2:
//     this.setState({ preCounter: 'Ready...'});
//   case 1:
//     this.setState({ preCounter: 'Set...'});
//   case 0:
//     this.setState({ preCounter: 'Go!'});
// }
