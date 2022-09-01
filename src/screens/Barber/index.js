/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';
import Toast from '../../components/Toast';

import FavoriteFullIcon from '../../assets/favorite_full.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import c from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);

      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);
      } else {
        Toast('Erro: ' + json.error);
      }

      setLoading(false);
    };
    getBarberInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
  };

  const handleServiceChoose = (key) => {
    setSelectedService(key);
    setShowModal(true);
  };

  return (
    <c.Container>
      <c.Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<c.SwipeDot />}
            activeDot={<c.SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <c.SwipeItem key={key}>
                <c.SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </c.SwipeItem>
            ))}
          </Swiper>
        ) : (
          <c.FakeSwiper />
        )}
        <c.PageBody>
          <c.UserInfoArea>
            <c.UserAvatar source={{uri: userInfo.avatar}} />
            <c.UserInfo>
              <c.UserInfoName>{userInfo.name}</c.UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </c.UserInfo>
            <c.UserFavButton onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#FF0000" />
              )}
            </c.UserFavButton>
          </c.UserInfoArea>

          {loading && <c.LoadingIcon size="large" color="#000000" />}

          {userInfo.services && (
            <c.ServiceArea>
              <c.ServicesTitle>Lista de serviços</c.ServicesTitle>

              {userInfo.services.map((item, key) => (
                <c.ServiceItem key={key}>
                  <c.ServiceInfo>
                    <c.ServiceName>{item.name}</c.ServiceName>
                    <c.ServicePrice>R$ {item.price.toFixed(2)}</c.ServicePrice>
                  </c.ServiceInfo>
                  <c.ServiceChooseButton
                    onPress={() => handleServiceChoose(key)}>
                    {/*  */}
                    <c.ServiceChooseBtnText>Agendar</c.ServiceChooseBtnText>
                  </c.ServiceChooseButton>
                </c.ServiceItem>
              ))}
            </c.ServiceArea>
          )}

          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <c.TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={
                  <NavPrevIcon width="35" height="35" fill="#000000" />
                }
                nextButton={
                  <NavNextIcon width="35" height="35" fill="#000000" />
                }>
                {userInfo.testimonials.map((item, key) => (
                  <c.TestimonialItem key={key}>
                    <c.TestimonialInfo>
                      <c.TestimonialName>{item.name}</c.TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </c.TestimonialInfo>
                    <c.TestimonialBody>{item.body}</c.TestimonialBody>
                  </c.TestimonialItem>
                ))}
              </Swiper>
            </c.TestimonialArea>
          )}
        </c.PageBody>
      </c.Scroller>
      <c.BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#FFFFFF" />
      </c.BackButton>

      <BarberModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </c.Container>
  );
};
