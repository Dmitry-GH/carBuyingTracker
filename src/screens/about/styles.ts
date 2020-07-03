import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform, TouchableNativeFeedback} from 'react-native';
import {Button} from 'react-native-elements';

export const StyledContactButton = styled(Button).attrs((props) => ({
  background:
    Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(
          props.theme.primary_dark || 'rgba(0,0,0,0.2)',
          true,
        )
      : TouchableNativeFeedback.SelectableBackground(),
  buttonStyle: {flex: 1, padding: 15},
  containerStyle: {
    flex: 1,
    marginHorizontal: 9,
    marginVertical: 10,
  },
  titleStyle: {fontSize: 18, flex: 1},
}))``;

export const StyledIcon = styled(Icon).attrs((props) => ({
  color: props.theme.main_text_white,
  size: 25,
}))``;

export const StyledLink = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: 18px;
  margin: 0 5px;
`;

export const StyledHeader = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 35px;
  text-align: center;
  align-self: center;
  margin: 5px 0;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 18px;
  margin: 5px 0;
`;

export const StyledTextWrap = styled.View``;

export const StyledTextWrapContact = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
