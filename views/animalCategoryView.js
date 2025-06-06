import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {animalCategoryViewModel} from '../viewModel/animalCategoryViewModel';
import {COLORS} from '../constants/colors';
import ItemCard from '../components/ItemCard';
import HeaderTitle from '../components/HeaderTitle';

const AnimalCategoryView = ({route}) => {
  const animalType = route?.params?.animalType;
  const {data, onPressItem} = animalCategoryViewModel(animalType);

  const itemList = data
    ? Object.entries(data).map(([key, item]) => ({key, ...item}))
    : [];

  return (
    <View style={styles.outerContainer}>
      <HeaderTitle title="Animal Categories" />
      <View style={styles.container}>
        <Text style={styles.title}>{animalType}</Text>
        <FlatList
          data={itemList}
          keyExtractor={item => item.key}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item}) => (
            <View style={styles.itemWrapper}>
              <ItemCard
                title={item.title}
                image={item.img}
                onPress={() => onPressItem(item.title)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: COLORS.brandOrange,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.brandOrange,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: COLORS.white,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});

export default AnimalCategoryView;
