import * as React from 'react';
import {SocialMediaType} from 'react-native-elements';
import {
  StyledButton,
  StyledSocialButton,
  StyledButtonContainer,
} from './styles';

interface TouchableButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  onLongPressed?: () => void;
  style?: object;
}

interface AuthButtonProps {
  title: string;
  type: SocialMediaType;
  onPress: () => void;
  onLongPressed?: () => void;
}

export const TouchableButton: React.FC<TouchableButtonProps> = ({
  title,
  onPress,
  disabled,
}): JSX.Element => (
  <StyledButton disabled={disabled} onPress={() => onPress()} title={title} />
);

export const AuthButton: React.FC<AuthButtonProps> = ({
  title,
  type,
  onPress,
}): JSX.Element => (
  <StyledButtonContainer>
    <StyledSocialButton
      button
      onPress={() => onPress()}
      title={title}
      type={type}
    />
  </StyledButtonContainer>
);
