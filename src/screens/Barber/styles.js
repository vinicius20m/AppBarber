import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
  `,
  Scroller: styled.ScrollView`
    flex: 1;
  `,
  SwipeDot: styled.View`
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 3px;
  `,
  SwipeDotActive: styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
  `,
  SwipeItem: styled.View`
    flex: 1;
    background-color: #63c2d1;
  `,
  SwipeImage: styled.Image`
    width: 100%;
    height: 240px;
  `,
  FakeSwiper: styled.View`
    height: 140px;
    background-color: #63c2d1;
  `,
  PageBody: styled.View`
    background-color: #ffffff;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
  `,
  UserInfoArea: styled.View`
    flex-direction: row;
    margin-top: -30px;
  `,
  UserAvatar: styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #ffffff;
  `,
  UserInfo: styled.View`
    flex: 1;
    justify-content: flex-end;
  `,
  UserInfoName: styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  UserFavButton: styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  `,
  ServiceArea: styled.View`
    margin-top: 30px;
  `,
  ServicesTitle: styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #268596;
    margin-left: 30px;
    margin-bottom: 20px;
  `,
  ServiceItem: styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
  `,
  ServiceInfo: styled.View`
    flex: 1;
  `,
  ServiceName: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
  `,
  ServicePrice: styled.Text`
    font-size: 14px;
    color: #268596;
  `,
  ServiceChooseButton: styled.TouchableOpacity`
    background-color: #4eadbe;
    border-radius: 10px;
    padding: 10px 15px;
  `,
  ServiceChooseBtnText: styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  `,
  TestimonialArea: styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
  `,
  TestimonialItem: styled.View`
    background-color: #268596;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
  `,
  TestimonialInfo: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
  `,
  TestimonialName: styled.Text`
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
  `,
  TestimonialBody: styled.Text`
    color: #ffffff;
    font-size: 13px;
  `,
  BackButton: styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
  `,
  LoadingIcon: styled.ActivityIndicator`
    margin-top: 50px;
  `,
};
