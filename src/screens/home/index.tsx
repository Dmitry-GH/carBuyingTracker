import React, {useEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from '../../services/Navigation';

import {goToAuth} from '../navigation';
import styles from './styles';

const Home = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();

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

  Navigation.mergeOptions(componentId, {
    topBar: {
      title: {
        text: user.userName,
      },
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{color: theme.main_text}}>Hello from Home screen.</Text>
    </View>
  );
};

export default Home;
