import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderTitle from '../components/HeaderTitle';
import {useNavigation} from '@react-navigation/native';

const AnimalScannerView = () => {
  const nav = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>Point your camera to an animal!</Text>
      <View style={styles.cameraBox}>
        <View style={styles.camera}>
          <Text style={styles.cameraText}>[ Camera Preview ]</Text>
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate('scanResult')}
          style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.brandOrange,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  cameraBox: {
    flex: 1,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: COLORS.disabled,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  scanButton: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.brandOrange,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  scanButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AnimalScannerView;
