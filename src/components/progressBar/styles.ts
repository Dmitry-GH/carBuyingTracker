import styled from 'styled-components/native';

export const StyledProgressBarContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledProgressBar = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 55px;
  width: 100%;
  background-color: ${(props) => props.theme.second_background};
  border-color: ${(props) => props.theme.primary};
  border-width: 2px;
  border-radius: 5px;
`;
