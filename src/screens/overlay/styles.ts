import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {BORDER_RADIUS} from '../../configs';

export const StyledOverlay = styled.View`
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.second_background_transparent};
`;

export const StyledOverlayContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 16px;
  background-color: ${(props) => props.theme.info};
  elevation: 4;
`;

export const StyledOverlayTitle = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.main_text_white};
`;

export const StyledOverlayCheckboxItem = styled(CheckBox).attrs((props) => ({
  containerStyle: {
    backgroundColor: props.theme.second_background,
    marginLeft: 0,
    marginRight: 0,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: props.theme.primary,
    borderRadius: BORDER_RADIUS,
  },
  wrapperStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: props.theme.main_text_white,
    textAlign: 'center',
    fontSize: 16,
  },
}))``;

export const styles = StyleSheet.create({
  message: {
    marginVertical: 8,
  },
});
