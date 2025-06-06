import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS} from '../constants/colors';
import koala from '../Assets/Images/vertebrates/Koala.png';

const AnimalDetailOverlay = props => {
  const {visible, onClose = () => {}, title = '', desc = '', img = ''} = props;

  useEffect(() => {
    console.log('cek semua', title, desc);
  }, []);
  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <View style={styles.innerBox}>
            <View style={styles.textContainer}>
              <Image source={img} style={styles.image} />
              <Text style={styles.animalName}>{title}</Text>
              <Text style={styles.animalDesc}>{desc}</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  image: {
    height: 300,
    width: 200,
    resizeMode: 'contain',
  },
  innerBox: {
    backgroundColor: 'white',
    margin: 0,
    padding: 30,
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    gap: 30,
  },
  textContainer: {
    gap: 10,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Futura Book',
    color: COLORS.black,
  },
  animalName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.black,
  },
  animalDesc: {
    fontSize: 20,
    textAlign: 'justify',
    color: COLORS.black,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: COLORS.brandOrange,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default AnimalDetailOverlay;
