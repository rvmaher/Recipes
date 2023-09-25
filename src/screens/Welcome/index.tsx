import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {ScreenProps} from '../../typings/navigation';
import useAuth from '../../hooks/useAuth';

const Welcome: ScreenProps<'Welcome'> = ({navigation}) => {
  const ring1 = useSharedValue(0);
  const ring2 = useSharedValue(0);
  const {handleUser} = useAuth();
  const [name, setName] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = () => {
    if (name) {
      setShowModal(false);
      handleUser(name);
      navigation.navigate('Home');
    }
  };
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
        <View className="flex-1 justify-center px-10">
          <View className="bg-slate-100 p-4 rounded-md items-center">
            <Text className="text-amber-600 font-bold text-xl mb-2 tracking-widest">
              Enter Your Name
            </Text>
            <TextInput
              onSubmitEditing={handleSubmit}
              value={name}
              onChangeText={setName}
              className="bg-slate-50 w-full px-3 font-semibold tracking-wider rounded-md mb-5 shadow-slate-500 shadow-lg"
            />
            <Pressable
              className="bg-amber-500 py-1 px-4 rounded-lg"
              onPress={handleSubmit}>
              <Text className="text-white font-medium text-sm tracking-wider">
                Ok
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Welcome;
