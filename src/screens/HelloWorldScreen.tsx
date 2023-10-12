import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
  },
});
