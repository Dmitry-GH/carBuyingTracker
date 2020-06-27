import React, {useState} from 'react';
import {
  StyledOverlay,
  StyledOverlayContainer,
  StyledOverlayTitle,
  StyledOverlayCheckboxItem,
} from './styles';
import {TouchableButton} from '../../components/buttons';
import {Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Overlay: OverlayComponentType = ({
  componentId,
  title,
  userCar,
}): JSX.Element => {
  const dismiss = () => Navigation.dismissOverlay(componentId);
  const interQuartileMean =
    userCar.average_price &&
    Math.round(userCar.average_price?.interQuartileMean);

  const arithmeticMean =
    userCar.average_price && Math.round(userCar.average_price?.arithmeticMean);

  const [checkedItem, setCheckedItem] = useState<string>('');

  return (
    <StyledOverlay>
      <StyledOverlayContainer>
        <StyledOverlayTitle>{title}</StyledOverlayTitle>
        <Text>arithmeticMean: ${arithmeticMean}</Text>
        <Text>interQuartileMean: ${interQuartileMean}</Text>
        <Text>Total car advert found: {userCar.average_price?.total}</Text>
        <StyledOverlayCheckboxItem
          checked={checkedItem === '1'}
          iconRight
          onPress={() => setCheckedItem('1')}
          title="Item"
        />
        <TouchableButton onPress={dismiss} title="OK" />
      </StyledOverlayContainer>
    </StyledOverlay>
  );
};

export default Overlay;
