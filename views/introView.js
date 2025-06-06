import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import CustomInput from '../components/CustomInput';
import {IntroViewModel} from '../viewModel/introViewModel';
import CustomButton from '../components/CustomButton';
import owl from '../Assets/Images/vertebrates/Owl.png';

const IntroView = () => {
  const {name, setName, onSubmit, disableButton} = IntroViewModel();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Image source={owl} style={styles.image} />
          <Text style={styles.title}>
            Get ready to explore the animal world!
          </Text>
          <CustomInput
            value={name}
            setVal={setName}
            label="What is your name?"
            placeholder={'Tarzan'}
          />
          <View style={styles.box}>
            <CustomButton
              onPress={onSubmit}
              text="Submit"
              width={'50%'}
              disabled={disableButton}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: COLORS.brandOrange,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    height: '40%',
    width: '90%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 35,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntroView;
