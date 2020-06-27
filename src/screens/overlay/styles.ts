import styled from 'styled-components/native';
import {CheckBox} from 'react-native-elements';
import {BORDER_RADIUS} from '../../configs';

export const StyledOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.second_background_transparent};
`;

export const StyledOverlayContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px;
  background-color: ${(props) => props.theme.info};
  elevation: 4;
`;

export const StyledTextWrapper = styled.View`
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  margin: 20px 0px;
`;

export const StyledTextColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.main_text_white};
  font-size: 16px;
  text-align: justify;
`;

export const StyledBtnWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 0,
    alignItems: 'center',
  },
}))``;

export const StyledOverlayTitle = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.main_text_white};
`;

export const StyledOverlayCheckboxItem = styled(CheckBox).attrs((props) => ({
  containerStyle: {
    backgroundColor: props.theme.second_background,
    marginVertical: 12,
    marginHorizontal: 9,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: props.theme.primary,
    borderRadius: BORDER_RADIUS,
  },
  wrapperStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  textStyle: {
    color: props.theme.main_text_contrast,
    textAlign: 'center',
    fontSize: 16,
  },
}))``;
