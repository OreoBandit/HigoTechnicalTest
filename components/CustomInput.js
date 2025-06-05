import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const CustomInput = props => {
  const {label = '', placeholder = '', value = '', setVal = () => {}} = props;
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={setVal}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 10,
  },
  textInput: {
    height: 50,
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 16,
  },
  label: {
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 17,
    color: COLORS.white,
    fontWeight: '500',
  },
});

export default CustomInput;
