import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Divider} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BORDER_RADIUS} from './index';

export const Flex1 = styled.View`
  flex: 1;
  flex: 1 0 auto;
`;

export const Flex2 = styled.View`
  flex: 2;
  flex: 2 0 auto;
`;

export const Flex3 = styled.View`
  flex: 3;
  flex: 3 0 auto;
`;

export const Flex8 = styled.View`
  flex: 8;
  flex: 8 0 auto;
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.primary,
  ...Platform.select({
    android: {
      size: 100,
    },
    ios: {
      size: 'large',
    },
  }),
}))``;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const StyledContainer = styled(KeyboardAwareScrollView).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 5,
  },
}))``;

export const StyledBlock = styled.View`
  display: flex;
  flex: 1;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledBlockRight = styled.View`
  flex: 1;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: 10px 0;
`;

export const StyledButtonsList = styled.View`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: space-around;
`;
export const StyledDivider = styled(Divider)`
  background-color: ${(props) => props.theme.primary};
  height: 3px;
`;

export const StyledTextError = styled.Text`
  background-color: ${(props) => props.theme.error};
  color: ${(props) => props.theme.main_text_white};
  font-size: 20px;
  padding: 25px;
  margin: 15px;
  text-align: center;
  border-radius: ${BORDER_RADIUS}px;
`;

export const StyledTextWelcome = styled.Text`
  background-color: ${(props) => props.theme.success};
  color: ${(props) => props.theme.main_text_white};
  font-size: 20px;
  padding: 25px;
  margin: 15px;
  text-align: center;
  border-radius: ${BORDER_RADIUS}px;
`;
