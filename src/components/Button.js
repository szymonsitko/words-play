import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  buttonStyle: {
    fontFamily: 'Special-Elite',
    justifyContent: 'center',
    fontSize: 42,
    backgroundColor: '#ff4d4d',
    color: 'black',
    textAlign: 'center',
    marginLeft: width * .2,
    marginRight: width * .2,
    marginTop: 24
  }
}

export default Button;
