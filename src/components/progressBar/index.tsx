import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {
  StyledProgressBarContainer,
  StyledProgressBar,
  StyledProgressBarText,
} from './styles';

interface ProgressBar {
  progress: number;
  finalProgress: number;
  backgroundColor: string;
}

const ProgressBar: React.FC<ProgressBar> = ({
  progress,
  finalProgress,
  backgroundColor,
}): JSX.Element => {
  let animation = useRef(new Animated.Value(progress));
  const currentPercent = +((progress / finalProgress) * 100).toFixed(2);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress <= finalProgress ? progress : finalProgress,
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
          style={[StyleSheet.absoluteFill, {backgroundColor, width}]}
        />
        <StyledProgressBarText>{currentPercent}%</StyledProgressBarText>
      </StyledProgressBar>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
