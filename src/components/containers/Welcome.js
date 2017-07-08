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
import { NAVBAR_COLORS } from '../../constants/constants';
import Button from '../Button';
import Form from '../Form';
import Navigation from '../Navigation';
import Credits from '../Credits';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  state = {
    modalVisibility: false
  }

  onFormSubmit(rawInput, cleanInput) {
    this.props.storeUserInput(rawInput, cleanInput);
    Actions.game();
  }

  switchModalVisibility() {
    this.setState({ modalVisibility: !this.state.modalVisibility });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation
          label="Welcome to WordsPlay !"
          colors={NAVBAR_COLORS}
        />
        <Form
          onFormSubmit={this.onFormSubmit.bind(this)}
          label="Put your text to start playing!"
          buttonText="Start"
        />
          <Credits
            modalVisible={this.state.modalVisibility}
            toggleModal={this.switchModalVisibility.bind(this)}
          />
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
    padding: 10,
    fontSize: 22,
    backgroundColor: '#99bbff',
    color: '#001a4d',
    fontWeight: 'bold'
  }
};

export default connect(null, { storeUserInput })(Welcome);
