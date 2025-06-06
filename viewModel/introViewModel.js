import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useRootContext} from '../context/rootContext';

export const IntroViewModel = () => {
  const {user, setUser} = useRootContext();
  const [name, setName] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const nav = useNavigation();

  useEffect(() => {
    if (name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name]);

  const onSubmit = () => {
    setUser(name);
    nav.navigate('tab');
  };

  const introVm = {
    name,
    setName,
    onSubmit,
    disableButton,
  };
  return introVm;
};
