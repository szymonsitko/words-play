import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { storeUserInput } from '../actions';
import { inputCleaner } from '../lib/InputCleaner';
import Button from './Button';

const { width, height } = Dimensions.get('window');

class Form extends Component {
  state = {
    inputText: '',
    cleanInput: '',
    displayWarning: false
  }

  acceptUserInput() {
    if (this.state.inputText < 1) {
      this.setState({ displayWarning: true });
    } else {
      this.setState({ displayWarning: false });
      // Further reducer based logic action here!
      const rawInput = this.state.inputText;
      const cleanedInput = inputCleaner(this.state.inputText);
      this.props.storeUserInput(rawInput, cleanedInput);
      Actions.game({ reset: true });
    }
  }

  displayWarning() {
    if (this.state.displayWarning) {
    return (
      <Text style={styles.warningLabel}>
        Word must be longer than zero characters!
      </Text>
      );
    }
  }

  render() {
    return (
      <View style={this.props.formStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({inputText: text})}
        value={this.state.inputText}
      />
        <Button style={styles} onPress={() => this.acceptUserInput()}>{this.props.buttonText}</Button>
        {this.displayWarning()}
      </View>
    );
  };
}

const styles = {
  frameStyle: {

  },
  inputStyle: {
    height: 40,
    padding: 6,
    marginTop: height * .05,
    marginBottom: height * .05,
    fontSize: 18
  },
  labelStyle: {
    marginTop: 10,
    fontSize: 22,
    backgroundColor: '#ffeb99',
    fontFamily: 'Special-Elite',
    color: 'black'
  },
  warningLabel: {
    textAlign: 'center',
    marginTop: 5
  },
  buttonTextStyle: {
    fontFamily: 'Special-Elite',
    justifyContent: 'center',
    fontSize: 42,
    backgroundColor: '#db70b8',
    color: 'black',
  },
  buttonAnimationStyle: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

const mapStateToProps = ({ game }) => {
  return game;
}

export default connect(mapStateToProps, { storeUserInput })(Form);
