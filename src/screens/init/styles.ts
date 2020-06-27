import styled from 'styled-components/native';

export const StyledInitImage = styled.Image`
  align-self: center;
  width: 400px;
  height: 400px;
`;

export const StyledInitImageWrapper = styled.View`
  flex: 2;
  align-content: center;
  justify-content: center;
`;

export const StyledInitContainer = styled.View`
  background-color: ${(props) => props.theme.main_background};
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
