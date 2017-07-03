import React from 'react';
import { View, Text, Modal } from 'react-native';

const Instructions = () => {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible
      onRequestClose={() => {alert("Modal has been closed.")}}
    >
   <View style={{marginTop: 22}}>
    <View>
      <Text>Hello World!</Text>


    </View>
   </View>
  </Modal>
  )
}
