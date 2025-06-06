import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRootContext} from '../context/rootContext';
import {COLORS} from '../constants/colors';
import ItemCard from '../components/ItemCard';
import {Animals} from '../model/animalModel';
import {homeViewModel} from '../viewModel/homepageViewmodel';

const Homepage = () => {
  const {user} = useRootContext();
  const homeVm = homeViewModel();
  const data = Animals;
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headerTitle}>
        {user ? `Hello, ${user}!` : 'homepage normal'}
      </Text>
      <Text style={styles.headerSubtitle}>
        Animals are divided into 2 classes: vertebrates (with backbone) and
        invertebrates (without backbone).
      </Text>

      <Text style={styles.headerSubtitle}>
        Choose one of the category below to explore more!
      </Text>
      <View style={styles.cardContainer}>
        {Object.entries(data).map(([key, item], index) => (
          <ItemCard
            key={key}
            title={item.title}
            image={item.img}
            onPress={() => homeVm.navigate(item?.title)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 35,
    backgroundColor: COLORS.brandOrange,
    flexDirection: 'column',
  },
  cardContainer: {
    flex: 1,
    gap: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  headerSubtitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'justify',
    padding: 10,
  },
});

export default Homepage;
