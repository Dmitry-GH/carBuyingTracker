import React, {useEffect, useState, useCallback} from 'react';
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
  Flex2,
} from '../../configs/stylesGlobal';
import {
  StyledHomeProgressContainer,
  StyledTitle,
  StyledText,
  StyledHomeImage,
  StyledHomeImageWrapper,
  StyledTextError,
} from './styles';
import ProgressBar from '../../components/progressBar';
import moment from 'moment';

const logo = require('../../assets/images/logo_transparent.png');

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
    `$${user.collectedMoney}`,
  );

  const interQuartileMean =
    user.userCar.average_price &&
    Math.round(user.userCar.average_price?.interQuartileMean);

  const arithmeticMean =
    user.userCar.average_price &&
    Math.round(user.userCar.average_price?.arithmeticMean);

  const averagePriceType = user.userCar.average_price_type;

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

  const avarageTypeOverlay = () => {
    const data = {
      title: 'Select avarage price type',
      userCar: user.userCar,
    };

    openOverlay(data);
  };

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
      <StyledHomeImageWrapper>
        <StyledHomeImage source={logo} />
      </StyledHomeImageWrapper>
      <Flex2>
        <StyledTitle>
          Progress of raising money for{'\n'}
          {user.userCar.mark?.name} {user.userCar.model?.name}
          {user.userCar.year_from && ' '}
          {user.userCar.year_from} {user.userCar.year_to && '-'}{' '}
          {user.userCar.year_to}
        </StyledTitle>

        {user.userCar.average_price?.total ? (
          <>
            <StyledHomeProgressContainer>
              <ProgressBar
                backgroundColor={theme.primary || 'rgba(224, 97, 14, 1)'}
                finalProgress={
                  (averagePriceType === 'interquartile'
                    ? interQuartileMean
                    : arithmeticMean) || 0
                }
                progress={user.collectedMoney}
              />
              <StyledInputContainer>
                <StyledBlock>
                  <Input
                    keyboardType={'number-pad'}
                    onChangeText={(collectedMoney) => {
                      let moneyString = collectedMoney.replace(/[^0-9]/g, '');

                      setCollectedMoney_local(`$${moneyString}`);
                    }}
                    onEndEditing={(e) => {
                      let moneyString = e.nativeEvent.text;
                      let moneyStringFiltered = moneyString.replace(
                        /[^0-9]/g,
                        '',
                      );
                      let moneyNumber = +moneyStringFiltered;

                      setCollectedMoney_local(`$${moneyNumber}`);
                      setCollectedMoney(moneyNumber);
                    }}
                    value={`${collectedMoney_local}`}
                  />
                </StyledBlock>
                <StyledBlock>
                  <StyledText>collected of</StyledText>
                </StyledBlock>
                <StyledBlock>
                  <TouchableButton
                    onPress={() => avarageTypeOverlay()}
                    title={
                      averagePriceType === 'interquartile'
                        ? `$${interQuartileMean}`
                        : `$${arithmeticMean}`
                    }
                  />
                </StyledBlock>
              </StyledInputContainer>
            </StyledHomeProgressContainer>
          </>
        ) : (
          <>
            <StyledBlock>
              <StyledTextError>
                Sorry, there is 0 advertisement for this search query. {'\n'}
                You can try to change some search parameter.
              </StyledTextError>
            </StyledBlock>
          </>
        )}
      </Flex2>
    </StyledContainer>
  );
};

export default Home;
