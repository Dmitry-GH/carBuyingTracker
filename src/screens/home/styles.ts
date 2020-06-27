import styled from 'styled-components/native';
import {BORDER_RADIUS} from '../../configs';

export const StyledHomeImage = styled.Image`
  align-self: center;
  width: 250px;
  height: 250px;
`;

export const StyledHomeImageWrapper = styled.View`
  flex: 2;
  align-content: center;
  justify-content: center;
`;

export const StyledHomeProgressContainer = styled.View`
  align-self: stretch;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
  text-align-vertical: center;
  flex: 1;
  align-self: center;
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

export const StyledTitle = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 18px;
  text-align: center;
  align-self: center;
`;
