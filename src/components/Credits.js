import React, { Component } from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
import Navigation from './Navigation';
import { INSTRUCTIONS } from '../constants/constants';

class Credits extends Component {
  render() {
    return (
      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {this.setState({ modalVisibility: false })}}
        >
        <ScrollView style={styles.container}>
          <Text style={styles.mainLabel}>Game Instructions</Text>
          <Text style={styles.content}>{INSTRUCTIONS}</Text>
        </ScrollView>
        <Text
          style={styles.footer}
          onPress={() => this.props.toggleModal()}
          >
          Back to Main
        </Text>
      </Modal>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#ccddff',
  },
  mainLabel: {
    textAlign: 'center',
    fontSize: 28,
    padding: 12,
    color: 'black',
    fontFamily: 'Special-Elite',
    backgroundColor: '#db70b8'
  },
  content: {
    textAlign: 'center',
    marginTop: 14,
    fontFamily: 'Hind',
    fontSize: 16,
    color: 'black'
  },
  footer: {
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

export default Credits;
