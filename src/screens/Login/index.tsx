import React, {useEffect, useState} from 'react';
import {Image, Modal, StatusBar, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import FirebaseLogin from '../../components/FirebaseLogin';
import {ScreenProps} from '../../typings/navigation';

const Login: ScreenProps<'Login'> = ({}) => {
  const ring1 = useSharedValue(0);
  const ring2 = useSharedValue(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    ring1.value = withSpring(30);
    ring2.value = withDelay(300, withSpring(40));
    setTimeout(() => {
      setShowModal(true);
    }, 2500);
  }, []);
  return (
    <View className="flex-1  justify-center items-center space-y-10 bg-amber-500">
      <StatusBar backgroundColor={'#FFBF00'} />
      <Animated.View
        className={'bg-white/20 rounded-full'}
        style={{padding: ring1}}>
        <Animated.View
          className={'bg-white/20 rounded-full '}
          style={{padding: ring2}}>
          <Image
            style={[{width: 200, height: 200}]}
            source={require('../../assets/Recipes.png')}
          />
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest text-xl">
          Recipes
        </Text>
        <Text className="font-medium tracking-widest text-white text-base">
          Recipes at your fingertips
        </Text>
      </View>
      <Modal visible={showModal} transparent animationType="fade">
        <FirebaseLogin />
      </Modal>
    </View>
  );
};

export default Login;
