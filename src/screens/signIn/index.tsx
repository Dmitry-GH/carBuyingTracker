import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userLoginRequest} from '../../store/user/actions';
import {AuthButton} from '../../components/buttons';
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
      <AuthButton
        onPress={() => fetchUser()}
        title="Sign in with Google"
        type="google"
      />
    </View>
  );
};

export default SignIn;
