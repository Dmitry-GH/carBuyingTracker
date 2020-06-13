import React, {useEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from '../../services/Navigation';

import {goToAuth} from '../navigation';
import {StyledContainer} from '../../configs/stylesGlobal';
import styles from './styles';

const Home = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

  useEffect(() => {
    try {
      if (!user.isLoggedIn) {
        goToAuth();
      } else {
        console.log(user.userCar);
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
    <StyledContainer>
      <Text style={{color: theme.main_text}}>
        Category: {user.userCar.category?.name}
      </Text>
      <Text style={{color: theme.main_text}}>
        Mark: {user.userCar.mark?.name}
      </Text>
      <Text style={{color: theme.main_text}}>
        Model: {user.userCar.model?.name}
      </Text>
      <Text style={{color: theme.main_text}}>
        Year from: {user.userCar.year_from}
      </Text>
      <Text style={{color: theme.main_text}}>
        Year to: {user.userCar.year_to}
      </Text>
    </StyledContainer>
  );
};

export default Home;
