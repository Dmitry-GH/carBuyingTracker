import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Input} from 'react-native-elements';
import {BORDER_RADIUS} from '../../configs';

export const StyledInput = styled(Input).attrs((props) => ({
  inputContainerStyle: {
    borderRadius: BORDER_RADIUS,
    borderBottomWidth: 0,
  },
  containerStyle: {
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  inputStyle: {
    borderRadius: BORDER_RADIUS,
    paddingVertical: 15,
    color: props.theme.main_text_white,
    backgroundColor: props.theme.primary,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
  disabledInputStyle: {
    backgroundColor: props.theme.disabled,
  },
  errorStyle: {
    padding: 5,
    marginHorizontal: 0,
    borderRadius: BORDER_RADIUS,
    color: props.theme.main_text_white,
    backgroundColor: props.theme.error,
    textAlign: 'center',
    fontSize: 14,
  },
  textAlign: 'center',
}))``;
