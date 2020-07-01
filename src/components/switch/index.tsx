import * as React from 'react';
import {StyledSwitch} from './styles';
import {SwitchProps} from 'react-native';

type SwitchType = SwitchProps;

export const Switch: React.FC<SwitchType> = ({onValueChange, value}): JSX.Element => (
  <StyledSwitch onValueChange={onValueChange} value={value} />
);
