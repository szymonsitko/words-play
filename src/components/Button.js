import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Button = ({ props, children, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonAnimationStyle} onPress={onPress}>
        <Text style={styles.buttonTextStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  buttonTextStyle: {
    fontFamily: 'Special-Elite',
    justifyContent: 'center',
    fontSize: 42,
    backgroundColor: '#db70b8',
    color: 'black',
  },
  buttonAnimationStyle: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

export default Button;
