import React, {useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userCarSet} from '../../store/user/actions';
import Navigation from '../../services/Navigation';
import {ListItem} from 'react-native-elements';
import styles from './styles';

const Modal = ({
  type,
  componentId,
}: {
  type: string;
  componentId: string;
}): JSX.Element => {
  const dispatch = useDispatch();
  const setUserCar = useCallback(
    (filterType: string, name: string, value: number) =>
      dispatch(userCarSet(filterType, name, value)),
    [dispatch],
  );

  const theme = useSelector((s: GlobalState) => s.theme);
  const user = useSelector((s: GlobalState) => s.user);
  const filters = useSelector((s: GlobalState) => s.filters);

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

  return (
    <SafeAreaView style={styles.container}>
      {!!filters[type]?.length && (
        <FlatList
          contentContainerStyle={styles.container}
          data={filters[type]}
          initialNumToRender={25}
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          windowSize={30}
        />
      )}
    </SafeAreaView>
  );
};

export default Modal;
