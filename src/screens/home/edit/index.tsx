import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {getCategory, getMark, getModel} from '../../../store/filters/actions';
import {openModal} from '../../navigation';
import styles from './styles';

const HomeEdit = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchCategory = useCallback(() => dispatch(getCategory()), [dispatch]);
  const fetchMark = useCallback(() => dispatch(getMark()), [dispatch]);

  const fetchModel = useCallback(() => dispatch(getModel()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);
  const filters = useSelector((s: GlobalState) => s.filters);

  const modal = (type: string) => {
    switch (type) {
      case 'category':
        fetchCategory();
        break;
      case 'mark':
        fetchMark();
        break;
      case 'model':
        fetchModel();
        break;
      default:
        break;
    }

    if (!filters.error) {
      const data = {
        title: `Select ${type}`,
        type,
      };

      openModal(data);
    } else {
      console.log(filters.error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableButton
        onPress={() => modal('category')}
        theme={theme}
        title={user.userCar?.category?.name || 'Category'}
      />
      <TouchableButton
        disabled={!user.userCar?.category}
        onPress={() => modal('mark')}
        theme={theme}
        title={user.userCar?.mark?.name || 'Mark'}
      />
      <TouchableButton
        disabled={!user.userCar?.mark}
        onPress={() => modal('model')}
        theme={theme}
        title={user.userCar?.model?.name || 'Model'}
      />
    </View>
  );
};

export default HomeEdit;
