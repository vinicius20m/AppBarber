import React, {useEffect, useState} from 'react';
import c from './styles';

import BarberItem from '../../components/BarberItem';

import Api from '../../Api';
import Toast from '../../components/Toast';
import {RefreshControl} from 'react-native';

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getFavorites();
    if (res.error === '') {
      setList(res.list);
    } else {
      Toast('bottom', 'Algo deu errado: ' + res.error);
    }

    setLoading(false);
  };

  return (
    <c.Container>
      <c.HeaderArea>
        <c.HeaderTitle>Favoritos</c.HeaderTitle>
      </c.HeaderArea>

      <c.Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getFavorites} />
        }>
        {/*  */}
        {!loading && list.length === 0 && (
          <c.EmptyWarning>Não há favoritos.</c.EmptyWarning>
        )}

        <c.ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </c.ListArea>
      </c.Scroller>
    </c.Container>
  );
};
