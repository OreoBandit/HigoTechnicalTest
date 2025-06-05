import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import CustomInput from '../components/CustomInput';
import {IntroViewModel} from '../viewModel/introViewModel';
import CustomButton from '../components/CustomButton';

const introView = () => {
  const {name, setName, onSubmit} = IntroViewModel();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.outerContainer}>
        <Text style={styles.title}>Get ready to explore the animal world!</Text>
        <CustomInput
          value={name}
          setVal={setName}
          label="What is your name?"
          placeholder={'Tarzan'}
        />
        <View style={styles.box}>
          <CustomButton onPress={onSubmit} text="Submit" width={'50%'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.brandOrange,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  toBottom: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default introView;
