import React, {useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from '../../services/Navigation';
import {getAveragePriceRequest} from '../../store/user/actions';
import {goToAuth} from '../navigation';
import {StyledContainer} from '../../configs/stylesGlobal';
import moment from 'moment';

const Home = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();
  const getAveragePrice = useCallback(
    () => dispatch(getAveragePriceRequest()),
    [dispatch],
  );

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

  const getTimestampDiff = useCallback(() => {
    let savedTimestamp = user.userCar.average_price_timestamp;
    let timestamp = savedTimestamp ? moment(savedTimestamp) : moment();
    let diffTimeInMinutes = moment().diff(timestamp, 'm');

    if (diffTimeInMinutes > 30) {
      return true;
    } else {
      return false;
    }
  }, [user.userCar.average_price_timestamp]);

  useEffect(() => {
    try {
      if (!user.isLoggedIn) {
        goToAuth();
      }
    } catch (err) {
      console.log('error: ', err);
    }
  }, [user.isLoggedIn]);

  useEffect(() => {
    try {
      if (!!user.userCar.mark?.value && !!user.userCar.model?.value) {
        if (user.userCar.changed || getTimestampDiff()) {
          getAveragePrice();
        }
      }
    } catch (err) {
      console.error('error: ', err);
    }
  }, [
    getAveragePrice,
    getTimestampDiff,
    user.userCar.changed,
    user.userCar.mark,
    user.userCar.model,
  ]);

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

      {user.userCar.average_price?.total ? (
        <>
          <Text style={{color: theme.main_text}}>
            arithmeticMean: $
            {Math.round(user.userCar.average_price?.arithmeticMean)}
          </Text>
          <Text style={{color: theme.main_text}}>
            interQuartileMean: $
            {Math.round(user.userCar.average_price?.interQuartileMean)}
          </Text>

          <Text style={{color: theme.main_text}}>
            total: {user.userCar.average_price?.total}
          </Text>

          {user.userCar.average_price_timestamp && (
            <Text style={{color: theme.main_text}}>
              Last Updated at:
              {moment(user.userCar.average_price_timestamp).format(
                'DD.MM.YYYY HH:mm',
              )}
            </Text>
          )}
        </>
      ) : (
        <>
          <Text style={{color: theme.main_text}}>
            Sorry, there is 0 advertisement for this search query.
          </Text>
          <Text style={{color: theme.main_text}}>
            You can try to change some search parameter.
          </Text>
        </>
      )}
    </StyledContainer>
  );
};

export default Home;
