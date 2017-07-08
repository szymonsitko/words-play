import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  BackHandler,
  ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { storeGameResult } from '../../actions';
import { scoreCalculator, timeCalculator, tagGenerator } from '../../lib/ScoreCalculator';
import { sleep } from '../../lib/Sleep';

const { width, height } = Dimensions.get('window');

class Game extends Component {
  state = {
    countdownTime: 'x',
    scoreToWin: scoreCalculator(this.props.game.cleanInput),
    renderCounterLabels: false,
    preCounter: 'Ready...',
    passedInput: false,
  }

  componentWillMount() {
    this.preCountingMessage();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show('Cannot go back while playing!', ToastAndroid.SHORT);
    return true;
  }

  goToResultsPage() {
    sleep(2500).then(() => {
      const gameAnalytics = {

      };
      this.props.storeGameResult({
        scoreTarget: this.state.scoreToWin,
        timeTotal: timeCalculator(this.props.game.cleanInput),
        timeLeft: this.state.countdownTime,
        userWon: this.state.userWonGame
      });
      Actions.result();
    });
  }

  resultCheck(text) {
    if (this.state.scoreToWin == text) {
      this.stopCountdownTimer();
      this.setState({ preCounter: 'You won!', userWonGame: true, lockPanel: true });
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
          countdownTime: timeCalculator(this.props.game.cleanInput)
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
          this.setState({ preCounter: 'You lost!', userWonGame: false, lockPanel: true });
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
        <Text style={styles.insertedText}>You have inserted: {this.props.game.inputText}</Text>
        <TextInput style={styles.guessInput} onChangeText={(text) => {
          if (!this.state.lockPanel) {
            this.setState({inputText: text, passedInput: true});
            this.resultCheck(text);
          }
        }}/>
        {this.renderHint()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.preCounterLabel}>{this.state.preCounter}</Text>
        {this.state.renderCounterLabels ? this.renderCounterLabels() : !this.renderCounterLabels()}
        <Text style={styles.counterLabel}> Just <Text style={{ fontWeight: 'bold'}}>{this.state.countdownTime}</Text> seconds left!</Text>
      </View>
    );
  };
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccddff',
  },
  hintLabel: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold'
  },
  counterLabel: {
    position: 'absolute',
    fontFamily: 'Special-Elite',
    backgroundColor: '#ffeb99',
    padding: 10,
    fontSize: 24,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'black',
    textAlign: 'center'
  },
  insertedText: {
    fontFamily: 'Special-Elite',
    fontSize: 28,
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
  },
  guessInput: {
    marginTop: 12,
    height: 45,
    fontFamily: 'Hind',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width * .125,
    marginRight: width * .125,
    borderRadius: 4
  }
}

const mapStateToProps = ({ game, result }) => {
  return { game, result };
}

export default connect(mapStateToProps, { storeGameResult })(Game);
