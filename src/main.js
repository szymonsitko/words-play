import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Dimensions
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Button from './components/Button';
import Form from './components/Form';

const { width, height } = Dimensions.get('window');

class WordsPlay extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcomeLabel}>
            Welcome to WordsPlay !
          </Text>
          <Form
            formStyle={styles.formStyle}
            label="Put your word to start playing!"
            buttonText="Start"
          />
            <Text onPress={() => console.log("Modal Here")} style={styles.credits}>Instructions</Text>
        </View>
      </Provider>
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

export default WordsPlay;
