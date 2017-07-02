import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';

const { width, height } = Dimensions.get('window');

class Form extends Component {
  state = { inputText: '' }

  render() {
    return (
      <View style={this.props.formStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({inputText: text})}
        value={this.state.inputText}
      />
        <Button onPress={() => console.log("goto")}>{this.props.buttonText}</Button>
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
  }
}

export default Form;
