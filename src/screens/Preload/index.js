import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import c from './styles';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'USER_SET_AVATAR',
            payload: {avatar: res.data.avatar},
          });

          return navigation.reset({routes: [{name: 'MainTab'}]});
        } else {
          return navigation.navigate('SignIn');
        }
      } else {
        return navigation.navigate('SignIn');
      }
    };

    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <c.Container>
      <BarberLogo width="100%" height="160" />
      <c.LoadingIcon size="large" color="#ffffff" />
    </c.Container>
  );
};
