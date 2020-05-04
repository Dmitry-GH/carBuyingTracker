import * as React from 'react';
import {
  StyleProp,
  View,
  Text,
  Platform,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {SocialIcon, SocialMediaType} from 'react-native-elements';
import styles from './styles';

interface TouchableProps {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const Touchable =
  Platform.OS === 'ios'
    ? (props: React.PropsWithChildren<TouchableProps>) => (
        <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
      )
    : (props: React.PropsWithChildren<TouchableProps>) => (
        <TouchableNativeFeedback {...props}>
          {props.children}
        </TouchableNativeFeedback>
      );

interface TouchableButtonProps {
  title: string;
  theme: AppTheme;
  onPress: () => void;
  onLongPressed?: () => void;
  style?: object;
}

interface AuthButtonProps {
  title: string;
  theme: AppTheme;
  type: SocialMediaType;
  onPress: () => void;
  onLongPressed?: () => void;
}

export const TouchableButton: React.FC<TouchableButtonProps> = ({
  title,
  onPress,
  theme,
}): JSX.Element => (
  <Touchable
    onPress={() => onPress()}
    style={[styles.buttonContainer, {backgroundColor: theme.main_accent}]}>
    <View style={styles.button}>
      <Text style={[styles.buttonText, {color: theme.main_text}]}>{title}</Text>
    </View>
  </Touchable>
);

export const AuthButton: React.FC<AuthButtonProps> = ({
  title,
  type,
  onPress,
  theme,
}): JSX.Element => (
  <View style={styles.buttonContainer}>
    <SocialIcon
      button
      onPress={() => onPress()}
      style={[styles.socialButton, {backgroundColor: theme.main_accent}]}
      title={title}
      type={type}
    />
  </View>
);
