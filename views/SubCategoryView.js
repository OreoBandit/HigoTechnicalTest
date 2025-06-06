import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import ItemCard from '../components/ItemCard';
import {COLORS} from '../constants/colors';
import {subCategoryViewModel} from '../viewModel/subCategoryViewModel';
import AnimalDetailOverlay from '../components/AnimalDetailOverlay';

const SubCategoryView = ({route}) => {
  const animalType = route?.params?.animalType;
  const {data, onOpenOverlay, onCloseOverlay, enableOverlay, selectedAnimal} =
    subCategoryViewModel(animalType);

  const itemList = data
    ? Object.entries(data).map(([key, item]) => ({key, ...item}))
    : [];

  useEffect(() => {
    console.log('cek itemlist', itemList);
  }, [itemList]);
  return (
    <View style={styles.outerContainer}>
      <HeaderTitle title={`Types of ${animalType}`} />
      <View style={styles.container}>
        <Text style={styles.title}>{`Meet your ${animalType} friends!`}</Text>
        {itemList && (
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
                  onPress={() => onOpenOverlay(item)}
                />
              </View>
            )}
          />
        )}
      </View>
      <AnimalDetailOverlay
        visible={enableOverlay}
        title={selectedAnimal?.title}
        desc={selectedAnimal?.desc}
        img={selectedAnimal?.img}
        onClose={onCloseOverlay}
      />
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

export default SubCategoryView;
