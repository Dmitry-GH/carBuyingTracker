import * as React from 'react';
import {StyledInput} from './styles';
import {TextInputProps} from 'react-native';
import {InputProps} from 'react-native-elements';

type InputType = TextInputProps & InputProps;

export const Input: React.FC<InputType> = ({
  disabled,
  errorMessage,
  keyboardType,
  onChangeText,
  onEndEditing,
  placeholder,
  value,
}): JSX.Element => (
  <StyledInput
    disabled={disabled}
    errorMessage={errorMessage}
    keyboardType={keyboardType}
    onChangeText={onChangeText}
    onEndEditing={onEndEditing}
    placeholder={placeholder}
    value={value}
  />
);
