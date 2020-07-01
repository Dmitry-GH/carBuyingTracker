import styled from 'styled-components/native';
import {BORDER_RADIUS} from '../../../configs';

export const StyledInputHeaderContainer = styled.View`
  margin: 5px 10px 20px 10px;
  padding: 10px 20px;
  flex-direction: row;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.theme.second_background};
`;

export const StyledInputHeader = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
  text-align-vertical: center;
  display: flex;
  flex: 1 1 0;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;
