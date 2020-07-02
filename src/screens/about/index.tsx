import React from 'react';
import {Linking} from 'react-native';
import {StyledContainer, StyledDivider, Flex1} from '../../configs/stylesGlobal';
import {
  StyledHeader,
  StyledText,
  StyledLink,
  StyledTextWrap,
  StyledTextWrapContact,
  StyledContactButton,
  StyledIcon,
} from './styles';

const autoRiaUrl = 'https://auto.ria.com';
const flaticonUrl = 'https://www.flaticon.com';
const freepikUrl = 'https://www.flaticon.com/authors/freepik';
const vectorsMarketUrl = 'https://www.flaticon.com/authors/vectors-market';

const devEmailUrl = 'mailto:dmitry.rudiuk@gmail.com';
const devTelegramUrl = 'https://t.me/rudiuk';

const About: AboutComponentType = (): JSX.Element => {
  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <StyledContainer>
      <Flex1>
        <StyledHeader>About app</StyledHeader>

        <StyledTextWrap>
          <StyledText>
            This app use{' '}
            <StyledLink onPress={() => openUrl(autoRiaUrl)}>AUTO.RIA</StyledLink> database
            and give you an average price for your dream car.{'\n'}You can input your
            collected money and app will show your progress based on the actual average
            price.
          </StyledText>
        </StyledTextWrap>
      </Flex1>

      <StyledDivider />

      <Flex1>
        <StyledHeader>Credits</StyledHeader>
        <StyledText>
          The logo was created based on two icons created by this authors:
        </StyledText>
        <StyledTextWrap>
          <StyledText>
            Icon made by{' '}
            <StyledLink onPress={() => openUrl(freepikUrl)}>Freepik</StyledLink> from{' '}
            <StyledLink onPress={() => openUrl(flaticonUrl)}>www.flaticon.com</StyledLink>
          </StyledText>
        </StyledTextWrap>
        <StyledTextWrap>
          <StyledText>
            Icon made by{' '}
            <StyledLink onPress={() => openUrl(vectorsMarketUrl)}>
              Vectors Market
            </StyledLink>{' '}
            from{' '}
            <StyledLink onPress={() => openUrl(flaticonUrl)}>www.flaticon.com</StyledLink>
          </StyledText>
        </StyledTextWrap>
      </Flex1>

      <StyledDivider />

      <Flex1>
        <StyledHeader>Developer contact</StyledHeader>

        <StyledText>Feel free to contact by:</StyledText>
        <StyledTextWrapContact>
          <StyledContactButton
            icon={<StyledIcon name="email" />}
            onPress={() => openUrl(devEmailUrl)}
            title="E-mail"
          />
          <StyledContactButton
            icon={<StyledIcon name="telegram" />}
            onPress={() => openUrl(devTelegramUrl)}
            title="Telegram"
          />
        </StyledTextWrapContact>
      </Flex1>
    </StyledContainer>
  );
};

export default About;
