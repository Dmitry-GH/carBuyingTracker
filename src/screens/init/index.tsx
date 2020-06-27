import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  StyledInitImageWrapper,
  StyledInitImage,
  StyledInitContainer,
} from './styles';
import {goToAuth, goHome} from '../navigation';

const logo = require('../../assets/images/logo_transparent.png');

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
    <StyledInitContainer>
      <StyledInitImageWrapper>
        <StyledInitImage source={logo} />
      </StyledInitImageWrapper>
    </StyledInitContainer>
  );
};

export default Initialising;
