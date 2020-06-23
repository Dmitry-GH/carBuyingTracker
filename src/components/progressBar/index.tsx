import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {StyledProgressBarContainer, StyledProgressBar} from './styles';

interface ProgressBar {
  progress: number;
  finalProgress: number;
}

const ProgressBar: React.FC<ProgressBar> = ({
  progress,
  finalProgress,
}): JSX.Element => {
  let animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [progress, finalProgress]);

  const width = animation.current.interpolate({
    inputRange: [0, finalProgress],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <StyledProgressBarContainer>
      <StyledProgressBar>
        <Animated.View
          style={[StyleSheet.absoluteFill, {backgroundColor: '#8BED4F', width}]}
        />
      </StyledProgressBar>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
