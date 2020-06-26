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
    minHeight: 40,
    color: props.theme.error,
    textAlign: 'center',
    fontSize: 14,
  },
  textAlign: 'center',
}))``;