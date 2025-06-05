import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const CustomButton = props => {
  const {
    backgroundColor = 'white',
    text = 'default',
    onPress = () => {},
    height = 55,
    width = '40%',
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {backgroundColor, height, width}]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // backgroundColor: COLORS.white,
    // width: '70%',
    // height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: COLORS.brandOrange,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomButton;
