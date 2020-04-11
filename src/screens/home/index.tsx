import React, {useEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from '../../services/Navigation';
import {userLogout} from '../../store/auth/actions';
import {goToAuth} from '../navigation';
import styles from './styles';

const Home = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(userLogout()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);

  useEffect(() => {
    try {
      if (!user.isLoggedIn) {
        goToAuth();
      }
    } catch (err) {
      console.log('error: ', err);
    }
  }, [user]);

  Navigation.mergeOptions(componentId, {
    topBar: {
      title: {
        text: user.userName,
      },
    },
  });

  return (
    <View style={styles.container}>
      <Text>Hello from Home screen.</Text>

      <Button onPress={logoutUser} title="Sign Out" />
    </View>
  );
};

export default Home;
