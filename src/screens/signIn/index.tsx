import React, {useEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userLoginRequest} from '../../store/auth/actions';
import {goHome} from '../navigation';
import styles from './styles';

const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchUser = useCallback(() => dispatch(userLoginRequest()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);

  useEffect(() => {
    try {
      if (user.isLoggedIn) {
        goHome();
      }
    } catch (err) {
      console.log('error: ', err);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Sign In screen</Text>

      <Button onPress={fetchUser} title="Login by Google" />
    </View>
  );
};

export default SignIn;
