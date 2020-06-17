import {StyleSheet} from 'react-native';
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
    backgroundColor: props.theme.main_accent,
  },
  disabledInputStyle: {
    backgroundColor: props.theme.disabled,
  },
  errorStyle: {
    color: props.theme.error,
    textAlign: 'center',
    fontSize: 14,
  },
  textAlign: 'center',
}))``;

export const StyledInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const StyledInputBlock = styled.View`
  flex: 1;
`;

export const StyledSaveButton = styled.View`
  display: flex;
  width: 47%;
  justify-content: flex-end;
  align-self: flex-end;
`;

const styles = StyleSheet.create({
  containerStyle_left: {
    paddingLeft: 0,
  },
  containerStyle_right: {
    paddingRight: 0,
  },
});

export default styles;
