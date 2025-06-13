import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function Animate5() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const bgProgress = useSharedValue(0);

  // Animate the circle
  useEffect(() => {
    // Left-right repeat
    translateX.value = withRepeat(
      withSequence(
        withTiming(100, { duration: 300 }),
        withTiming(0, { duration: 300 })
      ),
      5,
      false,
      () => {
        // After repeat finishes, animate Y position
        translateY.value = withSequence(
          withTiming(-height / 2, { duration: 600 }),
          withTiming(height / 2, { duration: 800 }, () => {
            // Animate background after circle starts falling
            bgProgress.value = withTiming(1, { duration: 1000 });
          })
        );
      }
    );
  }, []);

  // Animated styles
  const circleStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const backgroundStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      bgProgress.value,
      [0, 1],
      ['#ffffff', '#FFA500'] // white to orange
    );

    return {
      backgroundColor: bgColor,
    };
  });

  return (
    <Animated.View style={[styles.container, backgroundStyle]}>
      <Animated.View style={[styles.circle, circleStyle]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30
  }
});
