import styled from 'styled-components/native';
import {Switch} from 'react-native';

export const StyledSwitch = styled(Switch).attrs((props) => ({
  ios_backgroundColor: props.theme.grey3,
  thumbColor: props.value ? props.theme.primary : props.theme.grey5,
  trackColor: {false: props.theme.grey3, true: props.theme.main_text},
}))`
  height: 40px;
  transform: scale(1.5);
`;
