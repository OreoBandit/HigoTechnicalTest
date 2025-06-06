import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const ItemCard = props => {
  const {title, image, onPress, isDetail} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.outerContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    height: 200,
    width: 200,
  },
  image: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },
  cardTitle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
