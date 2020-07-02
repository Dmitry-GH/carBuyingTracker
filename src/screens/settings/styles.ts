import styled from 'styled-components/native';
import {BORDER_RADIUS} from '../../configs';

export const StyledThemeSwitchBlock = styled.View`
  margin: 0 10px 0 10px;
  padding: 10px 20px;
  flex-direction: row;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.theme.second_background};
`;

export const StyledThemeSwitchText = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
  text-align-vertical: center;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
`;

export const StyledBlockSwitch = styled.View`
  display: flex;
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
