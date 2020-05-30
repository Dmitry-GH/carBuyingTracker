import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {Input} from 'react-native-elements';
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
        title={user.userCar?.category?.name || 'Category'}
      />
      <TouchableButton
        disabled={!user.userCar?.category}
        onPress={() => modal('mark')}
        title={user.userCar?.mark?.name || 'Mark'}
      />
      <TouchableButton
        disabled={!user.userCar?.mark}
        onPress={() => modal('model')}
        title={user.userCar?.model?.name || 'Model'}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputBlock}>
          <Input
            containerStyle={styles.containerStyle_left}
            inputContainerStyle={[
              styles.inputContainerStyle,
              {backgroundColor: theme.main_accent},
            ]}
            inputStyle={styles.input}
            keyboardType={'number-pad'}
            placeholder="Year from"
          />
        </View>
        <View style={styles.inputBlock}>
          <Input
            containerStyle={styles.containerStyle_right}
            inputContainerStyle={[
              styles.inputContainerStyle,
              {backgroundColor: theme.main_accent},
            ]}
            inputStyle={styles.input}
            keyboardType={'number-pad'}
            placeholder="Year to"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeEdit;
