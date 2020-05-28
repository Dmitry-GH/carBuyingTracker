import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {getCategory, getMark} from '../../../store/filters/actions';
import {openModal} from '../../navigation';
import styles from './styles';

const HomeEdit = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchCategory = useCallback(() => dispatch(getCategory()), [
    dispatch,
  ]);
  const fetchMark = useCallback(() => dispatch(getMark()), [
    dispatch,
  ]);

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
        default:
          break;
      }
      

      if (!filters.error) {
        if(filters[type]?.length){
          const data = {
            title: `Select ${type}`,
            type,
            data: [...filters[type]]
          }
  
          openModal(data);
        }
      }else{
        console.log(filters.error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: theme.main_text}}>Hello from Home EDIT screen.</Text>

      <TouchableButton onPress={() => modal('category')} theme={theme} title={user.userCar?.category?.name || 'Category'} />
      <TouchableButton onPress={() => modal('mark')} theme={theme} title={user.userCar?.mark?.name || 'Mark'} />

    </View>
  );
};

export default HomeEdit;
