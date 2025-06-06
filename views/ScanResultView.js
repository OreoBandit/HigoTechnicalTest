import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import koala from '../Assets/Images/vertebrates/Koala.png';
import {animalSubCategoryModel} from '../model/animalSubCategoryModel';
import {useNavigation} from '@react-navigation/native';

const ScanResultView = () => {
  const salmon = animalSubCategoryModel.Fish.Salmon;
  const nav = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>Congratulations you found </Text>
      <View style={styles.resultBox}>
        <Image style={styles.image} source={koala} />
        <Text style={styles.scanResultTitle}>{salmon.title}</Text>
        <Text style={styles.scanResultDesc}>{salmon.desc}</Text>
      </View>
      <TouchableOpacity onPress={nav.goBack} style={styles.btnContinue}>
        <Text style={styles.textBtnContinue}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.brandOrange,
    justifyContent: 'space-evenly',
  },
  resultBox: {
    height: 450,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  image: {
    height: 200,
    width: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scanResultTitle: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  scanResultDesc: {
    fontSize: 25,
    padding: 20,
    color: COLORS.black,
    fontWeight: '500',
    textAlign: 'justify',
  },
  btnContinue: {
    width: '50%',
    padding: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },

  textBtnContinue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.brandOrange,
  },
});

export default ScanResultView;
