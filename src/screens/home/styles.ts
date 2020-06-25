import styled from 'styled-components/native';

export const StyledHomeProgressContainer = styled.View`
  align-self: stretch;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
  text-align-vertical: center;
  display: flex;
  flex: 1 1 0;
  align-self: center;
`;
