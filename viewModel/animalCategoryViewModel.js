import {useEffect, useState} from 'react';
import {inVertebrateModel} from '../model/invertebrateModel';
import {vertebrateModel} from '../model/vertebrateModel';
import {useNavigation} from '@react-navigation/native';

export const animalCategoryViewModel = animalType => {
  const [data, setData] = useState(null);
  const animal = animalType?.toLowerCase() || '';
  const nav = useNavigation();

  const onPressItem = itemTitle => {
    nav.navigate('subCategory', {animalType: itemTitle});
  };

  useEffect(() => {
    if (animal === 'vertebrates') {
      console.log('cek model', vertebrateModel);
      setData(vertebrateModel);
    } else {
      console.log('cek model 2', inVertebrateModel);
      setData(inVertebrateModel);
    }
  }, [animalType]);

  const animalCatvm = {
    data,
    setData,
    onPressItem,
  };
  return animalCatvm;
};
