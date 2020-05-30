import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeAppTheme} from '../../store/theme/actions';
import {userLogout} from '../../store/user/actions';
import {refreshAppTheme} from '../../services/Options';
import {TouchableButton} from '../../components/buttons';
import {goToAuth} from '../navigation';
import styles from './styles';

const Settings = (): JSX.Element => {
  const dispatch = useDispatch();
  const changeTheme = useCallback(
    (themeVariant: string) => dispatch(changeAppTheme(themeVariant)),
    [dispatch],
  );
  const logoutUser = useCallback(() => dispatch(userLogout()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

  useEffect(() => {
    try {
      if (!user.isLoggedIn) {
        goToAuth();
      }
    } catch (err) {
      console.log('error: ', err);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <TouchableButton
        onPress={() => {
          let themeVariant = theme.currentTheme === 'dark' ? 'light' : 'dark';
          changeTheme(themeVariant);
          refreshAppTheme();
        }}
        title="Toggle Theme"
      />

      <TouchableButton onPress={logoutUser} title="Sign Out" />
    </View>
  );
};

export default Settings;
