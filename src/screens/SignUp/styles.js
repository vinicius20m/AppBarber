import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    background-color: #63c2d1;
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  InputArea: styled.View`
    width: 100%;
    padding: 40px;
  `,
  CustomButton: styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
  `,
  CustomButtonText: styled.Text`
    font-size: 18px;
    color: #fff;
  `,
  SignMessageButton: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
  `,
  SignMessageButtonText: styled.Text`
    font-size: 16px;
    color: #268596;
  `,
  SignMessageButtonTextBold: styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
  `,
};
