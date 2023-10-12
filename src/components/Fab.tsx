import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28435B', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  left: {
    left: 20,
  },
  right: {
    right: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
