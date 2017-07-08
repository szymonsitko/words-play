import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Navigation = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.firstSeparator, { backgroundColor: props.colors[0] }]}></View>
      <View style={[styles.secondSeparator, { backgroundColor: props.colors[1] }]}></View>
      <View style={[styles.thirdSeparator, { backgroundColor: props.colors[2] }]}></View>
      <View style={[styles.fourthSeparator, { backgroundColor: props.colors[3] }]}></View>
      <View style={[styles.fifthSeparator, { backgroundColor: props.colors[4] }]}></View>
      <View style={styles.centerLabel}>
        <Text style={styles.mainLabel}>{props.label}</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    width: width,
    height: height * .125,
  },
  centerLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLabel: {
    fontFamily: 'Hind',
    fontSize: 26,
    color: 'white'
  },
  firstSeparator: {
    flex: 1,
    opacity: .8,
  },
  secondSeparator: {
    flex: 1,
    opacity: .7,
  },
  thirdSeparator: {
    flex: 1,
    opacity: .7,
  },
  fourthSeparator: {
    flex: 1,
    opacity: .7,
  },
  fifthSeparator: {
    flex: 1,
    opacity: .7,
  }
}

export default Navigation;

// backgroundColor: 'pink',
// backgroundColor: 'yellow',
// backgroundColor: 'brown',
// backgroundColor: 'green',
// backgroundColor: 'blue',
