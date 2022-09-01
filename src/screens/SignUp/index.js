import React, {useContext, useState} from 'react';
import c from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';

import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from '../../components/Toast';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passwordField !== '') {
      let res = await Api.signUp(nameField, emailField, passwordField);

      if (res.token) {
        await AsyncStorage.setItem('token', res.token);

        userDispatch({
          type: 'USER_SET_AVATAR',
          payload: {avatar: res.data.avatar},
        });

        return navigation.reset({routes: [{name: 'MainTab'}]});
      } else {
        return Toast('bottom', `Algo deu errado: ${res.error}`);
      }
    } else {
      return Toast('bottom', 'Atenção! Preencha todos os Campos.');
    }
  };

  const handleMessageButtonClick = () => {
    return navigation.navigate('SignIn');
  };

  return (
    <c.Container>
      <BarberLogo width="100%" height="160" />

      <c.InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu Nome"
          value={nameField}
          onChangeText={setNameField}
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu E-Mail"
          value={emailField}
          onChangeText={setEmailField}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua Senha"
          value={passwordField}
          onChangeText={setPasswordField}
          password={true}
        />

        <c.CustomButton onPress={handleSignClick}>
          <c.CustomButtonText>CADASTRAR</c.CustomButtonText>
        </c.CustomButton>
      </c.InputArea>

      <c.SignMessageButton onPress={handleMessageButtonClick}>
        <c.SignMessageButtonText>Já possui uma conta?</c.SignMessageButtonText>
        <c.SignMessageButtonTextBold>Faça Login</c.SignMessageButtonTextBold>
      </c.SignMessageButton>
    </c.Container>
  );
};
