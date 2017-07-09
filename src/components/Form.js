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
    const rawInput = this.state.inputText;
    const cleanedInput = inputCleaner(this.state.inputText);
    if (cleanedInput.length > 0) {
      this.props.onFormSubmit(rawInput, cleanedInput);
    } else {
      this.setState({ displayWarning: true });
    }
  }

  displayWarning() {
    if (this.state.enableMessages && this.state.inputText.length < 1 || this.state.displayWarning) {
    return (
      <Text style={styles.warningLabel}>
        Word must be longer than zero characters and must contain letters!
      </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formLabel}>{this.props.label}</Text>
        <TextInput
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder="e.g. Alphabet"
          onChangeText={(text) => {
            this.setState({
              enableMessages: true,
              displayWarning: false,
              inputText: text
            });
          }}
          value={this.state.inputText}
      />
        <Button
          title={this.props.buttonText}
          onPress={() => this.validateUserInput()}
        />
        {this.displayWarning()}
      </View>
    );
  };
}

const styles = {
  container: {
    marginLeft: width * .1,
    marginRight: width * .1,
  },
  formLabel: {
    textAlign: 'center',
    marginTop: 22,
    fontSize: 28,
    color: 'black',
    fontFamily: 'Special-Elite',
    backgroundColor: '#db70b8'
  },
  inputField: {
    marginTop: 12,
    height: 45,
    fontFamily: 'Hind',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width * .125,
    marginRight: width * .125,
    borderRadius: 4
  },
  warningLabel: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  }
}

export default Form;
