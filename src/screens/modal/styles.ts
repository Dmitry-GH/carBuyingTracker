import styled from 'styled-components/native';
import {SearchBar} from 'react-native-elements';

export const StyledSearchBar = styled(SearchBar).attrs((props) => ({
  containerStyle: {
    backgroundColor: props.theme.second_background,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: props.theme.main_background,
  },
  inputStyle: {
    color: props.theme.main_text_contrast,
    fontSize: 20,
  },
  placeholderTextColor: props.theme.primary,
  searchIcon: {
    color: props.theme.primary,
    size: 30,
  },
  clearIcon: {
    color: props.theme.primary,
    size: 30,
  },
}))``;
