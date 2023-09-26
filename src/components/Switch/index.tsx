import React from 'react';
import {Pressable} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Switch = ({onPress, value}: {value: boolean; onPress: () => void}) => {
  const switchVal = useDerivedValue(() => {
    return withSpring(value ? 28 : 0);
  }, [value]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: switchVal.value}],
    };
  });

  const animatedView = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        switchVal.value,
        [0, 30],
        ['grey', '#FFBF00'],
      ),
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={animatedView}
        className="h-8 w-16 rounded-full  justify-center px-1">
        <Animated.View
          style={animatedStyle}
          className="h-6 w-6 rounded-full bg-white"
        />
      </Animated.View>
    </Pressable>
  );
};

export default Switch;
