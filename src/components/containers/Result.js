import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';

class Result extends Component {
  resetGame() {
    // Here, all user data will be deleted & user will be sent to the main screen
  }

  render() {
    return (
      <View>
        <Text>You {this.props.gameResult} the game!</Text>
        <Text onPress={this.resetGame}>Try again</Text>
        <Text onPress={() => {BackHandler.exitApp()} }>Quit</Text>
      </View>
    );
  }
}

export default connect(null)(Result);
