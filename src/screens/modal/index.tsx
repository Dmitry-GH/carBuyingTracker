import React, {useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {TouchableButton} from '../../components/buttons';
import {useSelector, useDispatch} from 'react-redux';
import {userCarSet} from '../../store/user/actions';
import Navigation from '../../services/Navigation';
import styles from './styles';

const Modal = ({
  data,
  type,
  componentId,
}: {
  data: FiltersResponse[];
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

  const _renderItem = ({item}: {item: FiltersResponse}) => (
    <TouchableButton
      onPress={() => {
        setUserCar(type, item.name, item.value);
        Navigation.dismissModal(componentId);
      }}
      theme={theme}
      title={item.name}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!!data && data.length && (
        <FlatList
          contentContainerStyle={styles.container}
          data={data}
          initialNumToRender={25}
          keyExtractor={item => `${item.value}`}
          renderItem={_renderItem}
          windowSize={30}
        />
      )}
    </SafeAreaView>
  );
};

export default Modal;
