import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeAppTheme} from '../../store/theme/actions';
import {userLogout} from '../../store/user/actions';
import {refreshAppTheme} from '../../services/Options';
import {TouchableButton} from '../../components/buttons';
import {goToAuth} from '../navigation';
import {Switch} from '../../components/switch';
import {
  StyledButtonsList,
  Flex1,
  Flex3,
  StyledContainer,
  StyledBlock,
  StyledBlockRight,
} from '../../configs/stylesGlobal';
import {StyledThemeSwitchBlock, StyledThemeSwitchText, StyledBlockSwitch} from './styles';

const Settings = (): JSX.Element => {
  const dispatch = useDispatch();
  const changeTheme = useCallback(
    (themeVariant: string) => dispatch(changeAppTheme(themeVariant)),
    [dispatch],
  );
  const logoutUser = useCallback(() => dispatch(userLogout()), [dispatch]);

  const user = useSelector((s: GlobalState) => s.user);
  const theme = useSelector((s: GlobalState) => s.theme);

  const toggleTheme = () => {
    let themeVariant = theme.currentTheme === 'dark' ? 'light' : 'dark';
    changeTheme(themeVariant);
    refreshAppTheme();
  };

  useEffect(() => {
    try {
      if (!user.isLoggedIn) {
        goToAuth();
      }
    } catch (err) {
      console.error('error: ', err);
    }
  }, [user]);

  return (
    <StyledContainer>
      <Flex3 />
      <Flex1>
        <StyledButtonsList>
          <StyledThemeSwitchBlock>
            <StyledBlock>
              <StyledThemeSwitchText>Light theme</StyledThemeSwitchText>
            </StyledBlock>
            <StyledBlockSwitch>
              <Switch onValueChange={toggleTheme} value={theme.currentTheme === 'dark'} />
            </StyledBlockSwitch>
            <StyledBlockRight>
              <StyledThemeSwitchText>Dark theme</StyledThemeSwitchText>
            </StyledBlockRight>
          </StyledThemeSwitchBlock>

          <TouchableButton onPress={logoutUser} title="Sign Out" />
        </StyledButtonsList>
      </Flex1>
      <Flex3 />
    </StyledContainer>
  );
};

export default Settings;
