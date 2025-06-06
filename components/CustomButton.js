import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const CustomButton = props => {
  const {
    text = 'default',
    onPress = () => {},
    height = 55,
    width = '40%',
    disabled = false,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btnContainer,
        {
          height,
          width,
          backgroundColor: disabled ? COLORS.white : COLORS.white,
        },
      ]}>
      <Text
        style={[
          styles.btnText,
          {color: disabled ? COLORS.disabled : COLORS.brandOrange},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomButton;
