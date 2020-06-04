import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {getCategory, getMark, getModel} from '../../../store/filters/actions';
import {openModal} from '../../navigation';
import {StyledContainer} from '../../../configs/stylesGlobal';
import styles, {
  StyledInput,
  StyledInputContainer,
  StyledInputBlock,
  StyledSaveButton,
} from './styles';

const HomeEdit = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchCategory = useCallback(() => dispatch(getCategory()), [dispatch]);
  const fetchMark = useCallback(() => dispatch(getMark()), [dispatch]);

  const fetchModel = useCallback(() => dispatch(getModel()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);
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
    <StyledContainer>
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
      <StyledInputContainer>
        <StyledInputBlock>
          <StyledInput
            containerStyle={styles.containerStyle_left}
            disabled={!user.userCar?.model}
            keyboardType={'number-pad'}
            placeholder="Year from"
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <StyledInput
            containerStyle={styles.containerStyle_right}
            disabled={!user.userCar?.model}
            keyboardType={'number-pad'}
            placeholder="Year to"
          />
        </StyledInputBlock>
      </StyledInputContainer>

      <StyledSaveButton>
        <TouchableButton
          disabled={!user.userCar?.mark}
          onPress={() => console.log('save')}
          title={'Save'}
        />
      </StyledSaveButton>
    </StyledContainer>
  );
};

export default HomeEdit;
