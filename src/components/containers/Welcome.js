import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { INSTRUCTIONS } from '../../constants/constants';
import Button from '../Button';
import Form from '../Form';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  state = {
    modalVisibility: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeLabel}>
          Welcome to WordsPlay !
        </Text>
        <Form
          formStyle={styles.formStyle}
          label="Put your text to start playing!"
          buttonText="Start"
        />
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisibility}
            onRequestClose={() => {this.setState({ modalVisibility: false })}}
            >
           <View style={styles.modalStyles.container}>
            <View>
              <Text style={styles.modalStyles.instrucionsLabel}>Game Instructions</Text>
              <Text style={styles.modalStyles.instructionsContent}>{INSTRUCTIONS}</Text>
              <Text
                style={styles.modalStyles.closeModalLabel}
                onPress={() => {
                  this.setState({ modalVisibility: !this.state.modalVisibility });
                }}
                >
                Back to Main
              </Text>
            </View>
           </View>
          </Modal>
          <Text onPress={() => this.setState({ modalVisibility: true })} style={styles.credits}>Instructions</Text>
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99bbff',
  },
  credits: {
    position: 'absolute',
    fontFamily: 'Special-Elite',
    backgroundColor: '#85e085',
    padding: 8,
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
  },
  modalStyles: {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#99bbff',
    },
    instrucionsLabel: {
      marginTop: 10,
      fontSize: 28,
      backgroundColor: '#ffeb99',
      fontFamily: 'Special-Elite',
      color: 'black',
      textAlign: 'center'
    },
    instructionsContent: {
      marginTop: 10,
      fontSize: 20,
      fontFamily: 'Special-Elite',
      color: 'black',
      backgroundColor: '#85e085',
      textAlign: 'center'
    },
    closeModalLabel: {
      marginTop: 10,
      fontFamily: 'Special-Elite',
      fontSize: 32,
      backgroundColor: '#db70b8',
      color: 'black',
      textAlign: 'center',
    }
  }
};

export default Welcome;
