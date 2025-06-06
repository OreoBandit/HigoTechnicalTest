import {useEffect, useState} from 'react';
import {animalSubCategoryModel} from '../model/animalSubCategoryModel';

export const subCategoryViewModel = animalType => {
  const [data, setData] = useState(null);
  const [enableOverlay, setEnableOverlay] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const onCloseOverlay = () => {
    setEnableOverlay(false);
  };

  const onOpenOverlay = data => {
    setSelectedAnimal(data);
    setEnableOverlay(true);
  };

  useEffect(() => {
    console.log('halo');
  }, []);

  useEffect(() => {
    setData(animalSubCategoryModel[animalType]);
    console.log('cek data 3', {
      data: animalSubCategoryModel[animalType],
      animalType: animalType,
    });
  }, [animalType]);

  const scViewModel = {
    data,
    setData,
    onCloseOverlay,
    onOpenOverlay,
    enableOverlay,
    selectedAnimal,
  };
  return scViewModel;
};
