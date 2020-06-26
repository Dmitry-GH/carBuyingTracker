import React, {useEffect, useState, useCallback} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from '../../services/Navigation';
import {
  getAveragePriceRequest,
  userSetCollectedMoney,
} from '../../store/user/actions';
import {Input} from '../../components/input';
import {TouchableButton} from '../../components/buttons';

import {goToAuth, openOverlay} from '../navigation';
import {
  StyledContainer,
  StyledBlock,
  StyledInputContainer,
} from '../../configs/stylesGlobal';
import {StyledHomeProgressContainer, StyledText} from './styles';
import ProgressBar from '../../components/progressBar';
import moment from 'moment';

const Home = ({componentId}: {componentId: string}): JSX.Element => {
  const dispatch = useDispatch();
  const getAveragePrice = useCallback(
    () => dispatch(getAveragePriceRequest()),
    [dispatch],
  );
  const setCollectedMoney = useCallback(
    (collectedMoney: number) => dispatch(userSetCollectedMoney(collectedMoney)),
    [dispatch],
  );

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

  const [collectedMoney_local, setCollectedMoney_local] = useState<string>(
    `${user.collectedMoney}`,
  );

  const interQuartileMean =
    user.userCar.average_price &&
    Math.round(user.userCar.average_price?.interQuartileMean);

  const arithmeticMean =
    user.userCar.average_price &&
    Math.round(user.userCar.average_price?.arithmeticMean);

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
          <StyledHomeProgressContainer>
            <ProgressBar
              backgroundColor={theme.primary || 'rgba(224, 97, 14, 1)'}
              finalProgress={interQuartileMean || 0}
              progress={user.collectedMoney}
            />
            <StyledInputContainer>
              <StyledBlock>
                <Input
                  keyboardType={'number-pad'}
                  onChangeText={(collectedMoney) => {
                    setCollectedMoney_local(
                      collectedMoney.replace(/[^0-9]/g, ''),
                    );
                  }}
                  onEndEditing={(e) => {
                    let number = +e.nativeEvent.text;
                    setCollectedMoney_local(`${number}`.replace(/[^0-9]/g, ''));
                    setCollectedMoney(number);
                  }}
                  value={`${collectedMoney_local}`}
                />
              </StyledBlock>
              <StyledBlock>
                <StyledText>collected of</StyledText>
              </StyledBlock>
              <StyledBlock>
                <TouchableButton
                  onPress={() =>
                    openOverlay({
                      title: 'Select avarage price type',
                      message: 'test',
                    })
                  }
                  title="2000"
                />
                {/* <Text style={{color: theme.main_text}}>
                  arithmeticMean: ${arithmeticMean}
                </Text>
                <Text style={{color: theme.main_text}}>
                  interQuartileMean: ${interQuartileMean}
                </Text> */}
              </StyledBlock>
            </StyledInputContainer>
          </StyledHomeProgressContainer>

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
