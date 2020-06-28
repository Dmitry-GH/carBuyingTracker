import styled from 'styled-components/native';

export const StyledOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.second_background_transparent};
`;
