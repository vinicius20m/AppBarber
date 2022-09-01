import React, {useEffect, useState} from 'react';
import c from './styles';

import AppointmentItem from '../../components/AppointmentItem';

import Api from '../../Api';
import Toast from '../../components/Toast';
import {RefreshControl} from 'react-native';

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getAppointments();
    if (res.error === '') {
      setList(res.list);
    } else {
      Toast('bottom', 'Algo deu errado: ' + res.error);
    }

    setLoading(false);
  };

  return (
    <c.Container>
      <c.Scroller
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAppointments} />
        }>
        {/*  */}
        {!loading && list.length === 0 && (
          <c.EmptyWarning>Não há agendamentos.</c.EmptyWarning>
        )}

        <c.ListArea>
          {list.map((item, k) => (
            <AppointmentItem key={k} data={item} />
          ))}
        </c.ListArea>
      </c.Scroller>
    </c.Container>
  );
};
