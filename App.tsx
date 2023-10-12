import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'red',
  },
});
