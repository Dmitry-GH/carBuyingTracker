import styled from 'styled-components/native';

export const StyledInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const StyledInputBlock = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledSaveButton = styled.View`
  display: flex;
  width: 47%;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const StyledInputHeaderContainer = styled.View`
  margin-top: 60px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const StyledInputHeader = styled.Text`
  color: ${(props) => props.theme.main_text_contrast};
  font-size: 20px;
`;

export const StyledBlock = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
