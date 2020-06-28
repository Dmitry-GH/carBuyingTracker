import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Flex1 = styled.View`
  flex: 1;
`;

export const Flex2 = styled.View`
  flex: 2;
`;

export const Flex3 = styled.View`
  flex: 3;
`;

export const Flex8 = styled.View`
  flex: 8;
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs(
  (props) => ({
    color: props.theme.primary,
    ...Platform.select({
      android: {
        size: 100,
      },
      ios: {
        size: 'large',
      },
    }),
  }),
)``;

export const StyledContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 5px;
`;

export const StyledBlock = styled.View`
  display: flex;
  flex: 1;
  align-self: flex-start;
  align-items: center;
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
