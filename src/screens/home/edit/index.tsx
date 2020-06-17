import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {getCategory, getMark, getModel} from '../../../store/filters/actions';
import {openModal} from '../../navigation';
import {userCarSetYear} from '../../../store/user/actions';
import {StyledContainer} from '../../../configs/stylesGlobal';
import styles, {
  StyledInput,
  StyledInputContainer,
  StyledInputBlock,
} from './styles';
import moment from 'moment';

type YearInputError = boolean;

const currentYear = moment().year();
const YearInputValidationErrorText = `Please write correct year in range from 1900 to ${currentYear}`;

const HomeEdit = (): JSX.Element => {
  const dispatch = useDispatch();

  const fetchCategory = useCallback(() => dispatch(getCategory()), [dispatch]);
  const fetchMark = useCallback(() => dispatch(getMark()), [dispatch]);
  const fetchModel = useCallback(() => dispatch(getModel()), [dispatch]);

  const setUserCarYear = useCallback(
    (yearType: string, value: string) =>
      dispatch(userCarSetYear(yearType, value)),
    [dispatch],
  );

  const user = useSelector((s: GlobalState) => s.user);
  const filters = useSelector((s: GlobalState) => s.filters);

  const [yearFrom, setYearFrom] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');
  const [inputErrorYearFrom, setInputErrorYearFrom] = useState<YearInputError>(
    false,
  );
  const [inputErrorYearTo, setInputErrorYearTo] = useState<YearInputError>(
    false,
  );

  const setInputErrorChecker = (
    type: 'year_from' | 'year_to',
    isError: boolean,
  ) => {
    type === 'year_from'
      ? setInputErrorYearFrom(isError)
      : setInputErrorYearTo(isError);
  };

  const validateYearInput = (year: string, type: 'year_from' | 'year_to') => {
    if (+year >= 1900 && +year <= currentYear) {
      setUserCarYear(type, year);

      setInputErrorChecker(type, false);
    } else {
      if (year.length) {
        setInputErrorChecker(type, true);
      } else {
        setUserCarYear(type, year);

        setInputErrorChecker(type, false);
      }
    }
  };

  const handleYearInputChange = (
    year: string,
    type: 'year_from' | 'year_to',
  ) => {
    if (type === 'year_from') {
      year.length > 4 ? setYearFrom(yearFrom) : setYearFrom(year);
    } else {
      year.length > 4 ? setYearTo(yearTo) : setYearTo(year);
    }
  };

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
            defaultValue={user.userCar?.year_from ? user.userCar.year_from : ''}
            disabled={!user.userCar?.model}
            errorMessage={
              inputErrorYearFrom ? YearInputValidationErrorText : ''
            }
            keyboardType={'number-pad'}
            onChangeText={(year) => {
              handleYearInputChange(year, 'year_from');
            }}
            onEndEditing={(e) => {
              validateYearInput(e.nativeEvent.text, 'year_from');
            }}
            placeholder="Year from"
            renderErrorMessage={inputErrorYearFrom}
            value={yearFrom}
          />
        </StyledInputBlock>
        <StyledInputBlock>
          <StyledInput
            containerStyle={styles.containerStyle_right}
            defaultValue={user.userCar?.year_to ? user.userCar.year_to : ''}
            disabled={!user.userCar?.model}
            errorMessage={inputErrorYearTo ? YearInputValidationErrorText : ''}
            keyboardType={'number-pad'}
            onChangeText={(year) => {
              handleYearInputChange(year, 'year_to');
            }}
            onEndEditing={(e) => {
              validateYearInput(e.nativeEvent.text, 'year_to');
            }}
            placeholder="Year to"
            renderErrorMessage={inputErrorYearTo}
            value={yearTo}
          />
        </StyledInputBlock>
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default HomeEdit;
