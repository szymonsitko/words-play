import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { storeUserInput } from '../../actions';
import { inputCleaner } from '../../lib/InputCleaner';
import { INSTRUCTIONS } from '../../constants/constants';
import Button from '../Button';
import Form from '../Form';
import Navigation from '../Navigation';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  state = {
    modalVisibility: false
  }

  onFormSubmit(rawInput, cleanInput) {
    this.props.storeUserInput(rawInput, cleanInput);
    Actions.game();
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation
          label="Welcome to WordsPlay !"
          colors={['#5E92FF', '#56E898', '#FFFE6B', '#E8A051', '#FF59A7']}
        />
        <Form
          onFormSubmit={this.onFormSubmit.bind(this)}
          label="Put your text to start playing!"
          buttonText="Start"
        />
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisibility}
            onRequestClose={() => {this.setState({ modalVisibility: false })}}
            >
           <View>
            <ScrollView>
              <Text>Game Instructions</Text>
              <Text>{INSTRUCTIONS}</Text>
              <Text
                style={{ fontFamily: 'Hind' }}
                onPress={() => {
                  this.setState({ modalVisibility: !this.state.modalVisibility });
                }}
                >
                Back to Main
              </Text>
            </ScrollView>
           </View>
          </Modal>
          <Text style={styles.credits} onPress={() => this.setState({ modalVisibility: true })}>Instructions</Text>
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccddff',
  },
  credits: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    padding: 12,
    fontSize: 22,
    backgroundColor: '#99bbff',
    color: '#001a4d',
    fontWeight: 'bold'
  }
};

export default connect(null, { storeUserInput })(Welcome);
