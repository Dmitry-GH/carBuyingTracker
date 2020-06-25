import React, {useState} from 'react';
import {
  styles,
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
  message,
}): JSX.Element => {
  const dismiss = () => Navigation.dismissOverlay(componentId);

  const [checkedItem, setCheckedItem] = useState<string>('');

  return (
    <StyledOverlay>
      <StyledOverlayContainer>
        <StyledOverlayTitle>{title}</StyledOverlayTitle>
        <Text style={styles.message}>{message}</Text>
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
