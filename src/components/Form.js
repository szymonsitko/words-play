import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { inputCleaner } from '../lib/InputCleaner';
import Button from './Button';

const { width, height } = Dimensions.get('window');

class Form extends Component {
  state = {
    inputText: '',
    enableMessages: false
  }

  validateUserInput() {
    if (this.state.inputText.length > 0) {
      const rawInput = this.state.inputText;
      const cleanedInput = inputCleaner(this.state.inputText);
      this.props.onFormSubmit(rawInput, cleanedInput);
    }
  }


  displayWarning() {
    if (this.state.enableMessages && this.state.inputText.length < 1) {
    return (
      <Text style={styles.warningLabel}>
        Word must be longer than zero characters!
      </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => {
            this.setState({
              enableMessages: true,
              inputText: text
            });
          }}
          value={this.state.inputText}
      />
        <Button style={styles} onPress={() => this.validateUserInput()}>{this.props.buttonText}</Button>
        {this.displayWarning()}
      </View>
    );
  };
}

const styles = {
  formStyle: {
    marginTop: height * .1
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

export default Form;
