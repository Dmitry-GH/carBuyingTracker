import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {goToAuth, goHome} from '../navigation';

const Initialising: InitialisingComponentType = (): JSX.Element => {
  const user = useSelector((s: GlobalState) => s.user);

  useEffect(() => {
    try {
      if (user.isLoggedIn) {
        goHome();
      } else {
        goToAuth();
      }
    } catch (err) {
      console.log('error: ', err);
      goToAuth();
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Loading...</Text>
    </View>
  );
};

export default Initialising;
