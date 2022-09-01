import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #63c2d1;
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 20px;
  `,
  HeaderArea: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderTitle: styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  `,
  SearchButton: styled.TouchableOpacity`
    width: 26px;
    height: 26px;
  `,
  LocationArea: styled.View`
    background-color: #4eadbe;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
  `,
  LocationInput: styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #ffffff;
  `,
  LocationFinder: styled.TouchableOpacity`
    width: 24px;
    height: 24px;
  `,
  LoadingIcon: styled.ActivityIndicator`
    margin-top: 50px;
  `,
  ListArea: styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
  `,
};
