import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 40}}>
        Counter: {counter}
      </Text>
      <TouchableOpacity
        style={{borderRadius: 100, backgroundColor: '#75B9BE'}}
        onPress={() => setCounter(count => count + 1)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};
