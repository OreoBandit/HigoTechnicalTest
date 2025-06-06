import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/colors';

const HeaderTitle = props => {
  const {title = ''} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.brandOrange,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.brandOrange,
  },
  rightPlaceholder: {
    width: 32, // same width as back button for centering
  },
});

export default HeaderTitle;
