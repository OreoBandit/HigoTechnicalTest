import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useRootContext} from '../context/rootContext';

export const IntroViewModel = () => {
  const {user, setUser} = useRootContext();
  const [name, setName] = useState('');
  const nav = useNavigation();

  const onSubmit = () => {
    setUser(name);
    nav.navigate('homepage');
  };

  useEffect(() => {
    console.log('name', name);
  }, [name]);

  const introVm = {
    name,
    setName,
    onSubmit,
  };
  return introVm;
};
