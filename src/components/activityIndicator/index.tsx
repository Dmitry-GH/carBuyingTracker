import React from 'react';
import {StyledActivityIndicator} from '../../configs/stylesGlobal';
import {StyledOverlay} from './styles';

const ActivityIndicator: ActivityIndicatorType = (): JSX.Element => {
  return (
    <StyledOverlay>
      <StyledActivityIndicator />
    </StyledOverlay>
  );
};

export default ActivityIndicator;
