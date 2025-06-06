import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import animalImage from '../Assets/Images/AnimalIntro.png';
import {COLORS} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const InitScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <Image style={styles.img} source={animalImage} />
      <View style={styles.box}>
        <Text style={styles.title}>Discover the Wild World of Animals!</Text>
        <Text style={styles.subtitle}>
          Tap to explore, learn, and roar with fun facts!
        </Text>
      </View>
      <View style={styles.toBottom}>
        <CustomButton
          backgroundColor={COLORS.white}
          height={55}
          width={'70%'}
          text={'Start Now'}
          onPress={() => {
            nav.navigate('intro');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.brandOrange,
  },
  img: {
    height: '40%',
    width: '100%',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    // fontWeight: 'bold',
  },
  box: {
    paddingHorizontal: 30,
    gap: 30,
    // backgroundColor: 'red',
  },
  toBottom: {
    paddingTop: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InitScreen;
