import React, {useState} from 'react';
import c from './styles';

import BarberItem from '../../components/BarberItem';
import Api from '../../Api';
import Toast from '../../components/Toast';

export default () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [list, setList] = useState([]);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText !== '') {
      let res = await Api.search(searchText);
      if (res.error === '') {
        if (res.list.length > 0) {
          setList(res.list);
        } else {
          setEmptyList(true);
        }
      } else {
        Toast('bottom', 'Algo deu errado: ' + res.error);
      }
    }

    setLoading(false);
  };

  return (
    <c.Container>
      <c.SearchArea>
        <c.SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </c.SearchArea>

      <c.Scroller>
        {loading && <c.LoadingIcon size="large" color="#000000" />}

        {emptyList && (
          <c.EmptyWarning>
            Não achamos barbeiros com o nome "{searchText}"
          </c.EmptyWarning>
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
