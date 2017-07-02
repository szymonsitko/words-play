import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Form from './components/Form';

const { width, height } = Dimensions.get('window');

class WordsPlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeLabel}>
          welcome to WordsPlay !
        </Text>
        <Form
          formStyle={styles.formStyle}
          label="Put your word to start playing!"
          buttonText="Start"
        />
        <Text style={styles.credits}>
          Made by Szymon Sitko 2016
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99bbff',
  },
  credits: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: 'black',
    textAlign: 'center'
  },
  welcomeLabel: {
    fontFamily: 'Special-Elite',
    textAlign: 'center',
    fontSize: 42,
    color: 'black',
    marginTop: height * .05,
    backgroundColor: '#ff4d4d'
  },
  formStyle: {
    marginTop: height * .1
  },

});

export default WordsPlay;
