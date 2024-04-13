import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TextInputCustom = ({ placeholder }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    padding: 14,
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: 'white',
  },
});
