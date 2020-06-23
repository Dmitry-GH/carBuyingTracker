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
