import React, {useContext, useState} from 'react';
import c from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';
import Toast from '../../components/Toast';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type: 'USER_SET_AVATAR',
          payload: {avatar: json.data.avatar},
        });

        return navigation.reset({routes: [{name: 'MainTab'}]});
      } else {
        return Toast('bottom', 'E-Mail e/ou senha Errados!.');
      }
    } else {
      // return Alert.alert('Atenção!', 'Preencha todos os Campos');
      return Toast('bottom', 'Atenção! Preencha todos os Campos.');
    }
  };

  const handleMessageButtonClick = () => {
    return navigation.navigate('SignUp');
  };

  return (
    <c.Container>
      <BarberLogo width="100%" height="160" />

      <c.InputArea>
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
          <c.CustomButtonText>LOGIN</c.CustomButtonText>
        </c.CustomButton>
      </c.InputArea>

      <c.SignMessageButton onPress={handleMessageButtonClick}>
        <c.SignMessageButtonText>
          Ainda não possui uma conta?
        </c.SignMessageButtonText>
        <c.SignMessageButtonTextBold>Cadastre-se</c.SignMessageButtonTextBold>
      </c.SignMessageButton>
    </c.Container>
  );
};
