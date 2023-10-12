import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 40}}>
        Counter: {counter}
      </Text>
      <Button onPress={() => setCounter(count => count + 1)} title="Click" />
    </View>
  );
};
