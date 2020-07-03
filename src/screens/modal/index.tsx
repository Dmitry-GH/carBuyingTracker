import React, {useCallback, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userCarSet} from '../../store/user/actions';
import Navigation from '../../services/Navigation';
import {ListItem} from 'react-native-elements';
import {searchTextInArrOfObj} from '../../utils';
import {StyledSearchBar} from './styles';

const Modal = ({type, componentId}: {type: string; componentId: string}): JSX.Element => {
  const dispatch = useDispatch();
  const setUserCar = useCallback(
    (filterType: string, name: string, value: number) =>
      dispatch(userCarSet(filterType, name, value)),
    [dispatch],
  );

  const theme = useSelector((s: GlobalState) => s.theme);
  const user = useSelector((s: GlobalState) => s.user);
  const filters = useSelector((s: GlobalState) => s.filters);

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [filteredListData, setFilteredListData] = useState<FiltersResponse[]>([]);

  const selectItem = (item: FiltersResponse) => {
    setUserCar(type, item.name, item.value);
    Navigation.dismissModal(componentId);
  };

  const _renderItem = ({item}: {item: FiltersResponse}) => (
    <ListItem
      bottomDivider
      checkBox={{
        checked: item.value === user.userCar[type]?.value,
        onIconPress: () => selectItem(item),
        uncheckedColor: theme.main_text,
      }}
      containerStyle={{
        backgroundColor: theme.main_background,
      }}
      onPress={() => selectItem(item)}
      title={item.name}
      titleStyle={{color: theme.main_text}}
    />
  );

  const _keyExtractor = (item: FiltersResponse) => `${item.value}`;

  const updateSearch = (search: string) => {
    setSearchFilter(search);

    let filteredSearch = searchTextInArrOfObj(filters[type], 'name', search);
    setFilteredListData(filteredSearch);
  };

  useEffect(() => {
    if (filters[type]?.length) {
      setFilteredListData(filters[type]);
    }
  }, [filters, type]);

  return (
    <>
      <StyledSearchBar
        onChangeText={updateSearch}
        placeholder="Search ..."
        value={searchFilter}
      />
      <FlatList
        data={filteredListData}
        initialNumToRender={15}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        windowSize={30}
      />
    </>
  );
};

export default Modal;
