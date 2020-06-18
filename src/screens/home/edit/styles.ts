import {Switch} from 'react-native';
import styled from 'styled-components/native';
import {Input} from 'react-native-elements';

export const StyledInput = styled(Input).attrs((props) => ({
  inputContainerStyle: {
    borderRadius: 5,
    borderBottomWidth: 0,
  },
  inputStyle: {
    borderRadius: 5,
    paddingVertical: 15,
    color: props.theme.grey5,
    backgroundColor: props.theme.primary,
  },
  disabledInputStyle: {
    backgroundColor: props.theme.disabled,
  },
  errorStyle: {
    minHeight: 40,
    color: props.theme.error,
    textAlign: 'center',
    fontSize: 14,
  },
  textAlign: 'center',
}))``;

export const StyledSwitch = styled(Switch).attrs((props) => ({
  ios_backgroundColor: props.theme.grey3,
  thumbColor: props.value ? props.theme.primary : props.theme.grey5,
  trackColor: {false: props.theme.grey3, true: props.theme.main_highlight},
}))`
  align-self: center;
  height: 40px;
  transform: scale(1.5);
`;

export const StyledInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const StyledInputBlock = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledSaveButton = styled.View`
  display: flex;
  width: 47%;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const StyledInputHeaderContainer = styled.View`
  margin-top: 60px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const StyledInputHeader = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
`;

export const StyledBlock = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
