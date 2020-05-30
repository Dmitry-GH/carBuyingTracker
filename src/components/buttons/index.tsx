import * as React from 'react';
import {View} from 'react-native';
import {SocialIcon, SocialMediaType, Button} from 'react-native-elements';
import styles from './styles';

interface TouchableButtonProps {
  title: string;
  theme?: AppTheme;
  disabled?: boolean;
  onPress: () => void;
  onLongPressed?: () => void;
  style?: object;
}

interface AuthButtonProps {
  title: string;
  theme?: AppTheme;
  type: SocialMediaType;
  onPress: () => void;
  onLongPressed?: () => void;
}

export const TouchableButton: React.FC<TouchableButtonProps> = ({
  title,
  onPress,
  disabled,
}): JSX.Element => (
  <Button
    buttonStyle={styles.button}
    containerStyle={styles.buttonContainer}
    disabled={disabled}
    onPress={() => onPress()}
    title={title}
  />
);

export const AuthButton: React.FC<AuthButtonProps> = ({
  title,
  type,
  onPress,
}): JSX.Element => (
  <View style={styles.buttonContainer}>
    <SocialIcon
      button
      onPress={() => onPress()}
      style={styles.socialButton}
      title={title}
      type={type}
    />
  </View>
);
