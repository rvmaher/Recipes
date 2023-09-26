import React from 'react';
import {Pressable} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {value: boolean; onPress: () => void};

const Switch: React.FC<Props> = ({onPress, value}) => {
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
