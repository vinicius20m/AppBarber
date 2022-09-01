import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #63c2d1;
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 0 20px;
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
  // Container: styled.SafeAreaView``,
};
