import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions
} from 'react-native';
import Button from '../Button';
import Form from '../Form';

const { width, height } = Dimensions.get('window');

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeLabel}>
        Welcome to WordsPlay !
      </Text>
      <Form
        testFunction={getTestValue => {this.getTestValue = getTestValue}}
        formStyle={styles.formStyle}
        label="Put your word to start playing!"
        buttonText="Start"
      />
        <Text onPress={() => console.log("Modal Here")} style={styles.credits}>Instructions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99bbff',
  },
  credits: {
    position: 'absolute',
    fontFamily: 'Special-Elite',
    backgroundColor: '#ffeb99',
    padding: 4,
    fontSize: 18,
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
  }
});
