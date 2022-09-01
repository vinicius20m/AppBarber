import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #63c2d1;
  `,
  SearchArea: styled.View`
    background-color: #4eadbe;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    margin: 20px;
    margin-bottom: 0px;
  `,
  SearchInput: styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #ffffff;
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 0 20px;
  `,
  LoadingIcon: styled.ActivityIndicator`
    margin-top: 30px;
  `,
  ListArea: styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
  `,
  EmptyWarning: styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
    font-size: 14px;
  `,
};
