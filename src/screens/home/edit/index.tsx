import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableButton} from '../../../components/buttons';
import {Input} from '../../../components/input';
import {Switch} from '../../../components/switch';
import {getCategory, getMark, getModel} from '../../../store/filters/actions';
import {openModal} from '../../navigation';
import Navigation from '../../../services/Navigation';
import {userCarSetYear, setIsYearRange} from '../../../store/user/actions';
import {
  StyledContainer,
  StyledBlock,
  StyledInputContainer,
  StyledButtonsList,
  Flex1,
  Flex3,
} from '../../../configs/stylesGlobal';
import {StyledInputHeaderContainer, StyledInputHeader} from './styles';
import moment from 'moment';

type YearInputError = boolean;

const currentYear = moment().year();
const YearInputValidationErrorText = `Please write correct year in range from 1900 to ${currentYear}`;

const HomeEdit = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();

  const fetchCategory = useCallback(() => dispatch(getCategory()), [dispatch]);
  const fetchMark = useCallback(() => dispatch(getMark()), [dispatch]);
  const fetchModel = useCallback(() => dispatch(getModel()), [dispatch]);
  const setYearRange = useCallback(() => dispatch(setIsYearRange()), [
    dispatch,
  ]);

  const setUserCarYear = useCallback(
    (yearType: string, value: string) =>
      dispatch(userCarSetYear(yearType, value)),
    [dispatch],
  );

  const user = useSelector((s: GlobalState) => s.user);
  const filters = useSelector((s: GlobalState) => s.filters);

  const [yearFrom, setYearFrom] = useState<string>(
    user.userCar?.year_from || '',
  );
  const [yearTo, setYearTo] = useState<string>(user.userCar?.year_to || '');
  const [inputErrorYearFrom, setInputErrorYearFrom] = useState<YearInputError>(
    false,
  );
  const [inputErrorYearTo, setInputErrorYearTo] = useState<YearInputError>(
    false,
  );

  const [isYearsRange, setisYearsRange] = useState(user.userCar?.isYearRange);

  const toggleSwitch = () => {
    setYearRange();
    setYearTo('');
    setisYearsRange((previousState) => !previousState);
  };

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

    if (type === 'year_to' && !yearFrom.length) {
      setYearFrom('1900');
      setUserCarYear('year_from', '1900');
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

      setYearFrom(user.userCar?.year_from || '');
      setYearTo(user.userCar?.year_to || '');
    } else {
      console.log(filters.error);
    }
  };

  return (
    <StyledContainer>
      <Flex1 />
      <Flex3>
        <StyledButtonsList>
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
        </StyledButtonsList>
        <StyledInputHeaderContainer>
          <StyledBlock>
            <StyledInputHeader>Year range</StyledInputHeader>
          </StyledBlock>
          <StyledBlock>
            <Switch onValueChange={toggleSwitch} value={isYearsRange} />
          </StyledBlock>
        </StyledInputHeaderContainer>
        <StyledInputContainer>
          <StyledBlock>
            <Input
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
              placeholder={isYearsRange ? 'Year from' : 'Year'}
              value={yearFrom}
            />
          </StyledBlock>
          {isYearsRange && (
            <StyledBlock>
              <Input
                disabled={!user.userCar?.model}
                errorMessage={
                  inputErrorYearTo ? YearInputValidationErrorText : ''
                }
                keyboardType={'number-pad'}
                onChangeText={(year) => {
                  handleYearInputChange(year, 'year_to');
                }}
                onEndEditing={(e) => {
                  validateYearInput(e.nativeEvent.text, 'year_to');
                }}
                placeholder={'Year to'}
                value={yearTo}
              />
            </StyledBlock>
          )}
        </StyledInputContainer>
      </Flex3>

      <Flex1 />

      <Flex1>
        <TouchableButton
          onPress={() => Navigation.dismissModal(componentId)}
          title="OK"
        />
      </Flex1>
    </StyledContainer>
  );
};

export default HomeEdit;
