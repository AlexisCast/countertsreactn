import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="+1" onPress={() => setCounter(counter + 1)} />
      <Fab title="-1" position="bl" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
    color: 'black',
  },
});
