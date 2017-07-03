import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Button = ({ style, children, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={style.buttonAnimationStyle} onPress={onPress}>
        <Text style={style.buttonTextStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
