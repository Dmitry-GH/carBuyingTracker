import {Platform, TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components/native';
import {SocialIcon, Button} from 'react-native-elements';
import {BORDER_RADIUS} from '../../configs';

export const StyledButton = styled(Button).attrs((props) => ({
  background:
    Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(
          props.theme.primary_dark || 'rgba(0,0,0,0.2)',
          true,
        )
      : TouchableNativeFeedback.SelectableBackground(),
  buttonStyle: {flex: 1, paddingVertical: 15},
  containerStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 9,
  },
  titleStyle: {fontSize: 18},
}))``;

export const StyledSocialButton = styled(SocialIcon).attrs((props) => ({
  underlayColor: props.theme.primary_dark,
}))`
  flex: 1;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.theme.primary};
`;

export const StyledButtonContainer = styled.View`
  flex-direction: row;
`;
