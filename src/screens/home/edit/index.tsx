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

type YearInputError = {
  year_from_err: boolean;
  year_to_err: boolean;
};

const currentYear = moment().year();
const YearInputValidationErrorText = `\
Please write correct year in range from 1900 to ${currentYear}`;

const HomeEdit = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();

  const fetchCategory = useCallback(() => dispatch(getCategory()), [dispatch]);
  const fetchMark = useCallback(() => dispatch(getMark()), [dispatch]);
  const fetchModel = useCallback(() => dispatch(getModel()), [dispatch]);
  const setYearRange = useCallback((value) => dispatch(setIsYearRange(value)), [
    dispatch,
  ]);

  const setUserCarYear = useCallback(
    (years: UserCarSetYearAction['years']) => dispatch(userCarSetYear(years)),
    [dispatch],
  );

  const user = useSelector((s: GlobalState) => s.user);
  const filters = useSelector((s: GlobalState) => s.filters);

  const [years, setYears] = useState<UserCarSetYearAction['years']>({
    year_from: user.userCar?.year_from || '',
    year_to: user.userCar?.year_to || '',
  });

  const [inputErrorYears, setInputErrorYears] = useState<YearInputError>({
    year_from_err: false,
    year_to_err: false,
  });

  const [isYearsRange, setIsYearsRange] = useState<boolean>(user.userCar?.isYearRange);

  const toggleSwitch = () => {
    setYears({...years, year_to: ''});
    setInputErrorYears({year_from_err: false, year_to_err: false});
    setIsYearsRange((previousState) => !previousState);
  };

  const validateYearInput = () => {
    const year_from_int = Number(years.year_from);
    const year_to_int = Number(years.year_to);

    const isYearFromValid = year_from_int >= 1900 && year_from_int <= currentYear;
    const isYearToValid = year_to_int >= 1900 && year_to_int <= currentYear;
    const isYearFromSmaller = year_from_int <= year_to_int;
    let yearsErrorStatus;

    if (!year_from_int && !year_to_int) {
      yearsErrorStatus = {year_from_err: false, year_to_err: false};
    } else {
      if (isYearsRange) {
        if (!year_from_int || !year_to_int) {
          yearsErrorStatus = {
            year_from_err: !isYearFromValid,
            year_to_err: !isYearToValid,
          };
        } else {
          if (isYearFromValid && isYearToValid) {
            yearsErrorStatus = {
              year_from_err: !(isYearFromValid && isYearFromSmaller),
              year_to_err: !(isYearToValid && isYearFromSmaller),
            };
          } else {
            yearsErrorStatus = {
              year_from_err: !isYearFromValid,
              year_to_err: !isYearToValid,
            };
          }
        }
      } else {
        if (isYearFromValid) {
          yearsErrorStatus = {year_to_err: false, year_from_err: false};
        } else {
          yearsErrorStatus = {year_to_err: true, year_from_err: true};
        }
      }
    }

    setInputErrorYears(yearsErrorStatus);
    if (!yearsErrorStatus.year_from_err && !yearsErrorStatus.year_to_err) {
      return true;
    } else {
      return false;
    }
  };

  const handleYearInputChange = (year: string, type: 'year_from' | 'year_to') => {
    const validatedYear = year.replace(/[^0-9]/g, '');

    setYears({...years, [type]: validatedYear});

    validatedYear.length > 4
      ? setYears({...years, [type]: years[type]})
      : setYears({...years, [type]: validatedYear});
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

  const saveChanges = () => {
    if (validateYearInput()) {
      setYearRange(isYearsRange);
      setUserCarYear(years);
      Navigation.dismissModal(componentId);
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
        <StyledInputContainer>
          <StyledBlock>
            <Input
              disabled={!user.userCar?.model}
              errorMessage={
                inputErrorYears.year_from_err ? YearInputValidationErrorText : ''
              }
              keyboardType={'number-pad'}
              onChangeText={(year) => {
                handleYearInputChange(year, 'year_from');
              }}
              placeholder={isYearsRange ? 'Year from' : 'Year'}
              value={years.year_from}
            />
          </StyledBlock>
          {isYearsRange && (
            <StyledBlock>
              <Input
                disabled={!user.userCar?.model}
                errorMessage={
                  inputErrorYears.year_to_err ? YearInputValidationErrorText : ''
                }
                keyboardType={'number-pad'}
                onChangeText={(year) => {
                  handleYearInputChange(year, 'year_to');
                }}
                placeholder={'Year to'}
                value={years.year_to}
              />
            </StyledBlock>
          )}
        </StyledInputContainer>
        <StyledInputHeaderContainer>
          <StyledBlock>
            <StyledInputHeader>Year range</StyledInputHeader>
          </StyledBlock>
          <StyledBlock>
            <Switch onValueChange={toggleSwitch} value={isYearsRange} />
          </StyledBlock>
        </StyledInputHeaderContainer>
      </Flex3>

      <Flex1 />

      <Flex1>
        <TouchableButton onPress={() => saveChanges()} title="Save" />
      </Flex1>
    </StyledContainer>
  );
};

export default HomeEdit;
