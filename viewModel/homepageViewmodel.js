import {useNavigation} from '@react-navigation/native';

export const homeViewModel = () => {
  const nav = useNavigation();
  const navigate = animalType => {
    console.log('cek animalType', animalType);
    nav.navigate('category', {animalType});
  };

  const hViewModel = {
    navigate,
  };
  return hViewModel;
};
