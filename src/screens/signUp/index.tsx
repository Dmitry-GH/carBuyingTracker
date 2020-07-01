import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userRegisterRequest} from '../../store/user/actions';
import {AuthButton} from '../../components/buttons';
import {goHome} from '../navigation';
import styles from './styles';

const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchNewUser = useCallback(() => dispatch(userRegisterRequest()), [dispatch]);

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
        onPress={() => fetchNewUser()}
        title="Sign up with Google"
        type="google"
      />
    </View>
  );
};

export default SignUp;
