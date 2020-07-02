import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Divider} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  margin: 30px 0;
`;
