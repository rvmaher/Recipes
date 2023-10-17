import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import useAuth from '../../hooks/useAuth';
type Props = {
  props: DrawerContentComponentProps;
};
const DrawerBar: React.FC<Props> = ({props}) => {
  const {themeColor} = useAuth();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColor,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 50,
        padding: 20,
      }}>
      <View style={{alignItems: 'center', gap: 10}}>
        <Image
          resizeMode="contain"
          style={{height: 200, width: 200, borderRadius: 100}}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
          }}
        />
        <View>
          <Text
            className="text-red-900 tracking-widest"
            style={{
              fontWeight: '700',
              fontSize: 20,
              textTransform: 'uppercase',
            }}>
            Parmar Ramde
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 50,
        }}>
        {['Dashboard', 'Settings'].map(i => (
          <View key={i} style={{padding: 10}}>
            <Text
              className="text-pink-950 text-xl  tracking-widest"
              onPress={() => {
                props.navigation.navigate(i);
              }}>
              {i}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DrawerBar;
