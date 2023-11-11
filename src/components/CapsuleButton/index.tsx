import {Text, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type CapsuleButtonProps = {
  btnText: string;
  onPress: () => void;
  disabled?: boolean;
  bgColor?: string;
};

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  btnText,
  onPress,
  bgColor = 'bg-amber-500',
  disabled = false,
}) => {
  const buttonVal = useSharedValue(0);

  const handlePress = (val: number) => {
    buttonVal.value = withSpring(val);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: interpolate(buttonVal.value, [0, 5], [1, 0.97])}],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPressIn={() => handlePress(5)}
        onPressOut={() => handlePress(0)}
        disabled={disabled}
        className={`${bgColor} py-1 px-4 rounded-lg my-2 opacity-${
          disabled ? 60 : 100
        }`}
        onPress={onPress}>
        <Text className="text-white font-medium text-sm tracking-wider">
          {btnText}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default CapsuleButton;
