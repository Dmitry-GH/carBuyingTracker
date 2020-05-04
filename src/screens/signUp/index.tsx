import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userRegisterRequest} from '../../store/auth/actions';
import {AuthButton} from '../../components/buttons';
import {goHome} from '../navigation';
import styles from './styles';

const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchNewUser = useCallback(() => dispatch(userRegisterRequest()), [
    dispatch,
  ]);

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

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
        onPress={() => fetchNewUser()}
        theme={theme}
        title="Sign up with Google"
        type="google"
      />
    </View>
  );
};

export default SignUp;
