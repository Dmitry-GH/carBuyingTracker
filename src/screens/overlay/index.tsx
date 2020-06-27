import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyledOverlay,
  StyledOverlayContainer,
  StyledOverlayTitle,
  StyledOverlayCheckboxItem,
  StyledTextWrapper,
  StyledTextColumn,
  StyledBtnWrapper,
  StyledScrollView,
  StyledText,
} from './styles';
import {TouchableButton} from '../../components/buttons';
import {Navigation} from 'react-native-navigation';
import {userToggleAvaragePriceType} from '../../store/user/actions';
import moment from 'moment';

const Overlay: OverlayComponentType = ({
  componentId,
  title,
  userCar,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toggleAvaragePriceType = useCallback(
    () => dispatch(userToggleAvaragePriceType()),
    [dispatch],
  );

  const dismiss = () => {
    toggleAvaragePriceType();
    Navigation.dismissOverlay(componentId);
  };
  const interQuartileMean =
    userCar.average_price &&
    Math.round(userCar.average_price?.interQuartileMean);

  const arithmeticMean =
    userCar.average_price && Math.round(userCar.average_price?.arithmeticMean);

  const [checkedItem, setCheckedItem] = useState<string>(
    userCar.average_price_type,
  );

  return (
    <StyledOverlay>
      <StyledOverlayContainer>
        <StyledScrollView>
          <StyledOverlayTitle>{title}</StyledOverlayTitle>

          <StyledTextWrapper>
            <StyledTextColumn>
              <StyledText>Total car advert found:</StyledText>
              <StyledText>{userCar.average_price?.total}</StyledText>
            </StyledTextColumn>
            <StyledTextColumn>
              {userCar.average_price_timestamp && (
                <>
                  <StyledText>Last Updated at:</StyledText>
                  <StyledText>
                    {moment(userCar.average_price_timestamp).format(
                      'DD.MM.YYYY HH:mm',
                    )}
                  </StyledText>
                </>
              )}
            </StyledTextColumn>
          </StyledTextWrapper>

          <StyledText>
            Interquartile mean - the arithmetic mean of the values between the
            first and fourth quantile. More simply, this is the arithmetic
            average excluding 25% of the smallest and largest values.
          </StyledText>
          <StyledOverlayCheckboxItem
            checked={checkedItem === 'interquartile'}
            iconRight
            onPress={() => setCheckedItem('interquartile')}
            title={`Interquartile mean:    $${interQuartileMean}`}
          />

          <StyledText>
            Arithmetic mean - sum of all cars cost divided by the number of that
            cars.
          </StyledText>
          <StyledOverlayCheckboxItem
            checked={checkedItem === 'arithmetic'}
            iconRight
            onPress={() => setCheckedItem('arithmetic')}
            title={`Arithmetic mean:    $${arithmeticMean}`}
          />
          <StyledBtnWrapper>
            <TouchableButton onPress={dismiss} title="OK" />
          </StyledBtnWrapper>
        </StyledScrollView>
      </StyledOverlayContainer>
    </StyledOverlay>
  );
};

export default Overlay;
