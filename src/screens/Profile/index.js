import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button} from 'react-native';
import Api from '../../Api';
import c from './styles';

export default () => {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    return navigation.reset({routes: [{name: 'SignIn'}]});
  };

  return (
    <c.Container>
      <Text>Tela Profile</Text>
      <Button title="Sair" onPress={handleLogoutClick} />
    </c.Container>
  );
};
