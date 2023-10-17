import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DrawerSceneWrapper from '../../components/WrapperComponent';
import { Colors } from '../../context/AppContext';
import useAuth from '../../hooks/useAuth';

const Settings = () => {
  const {changeTheme, themeColor} = useAuth();

  return (
    <DrawerSceneWrapper>
      <View style={[{backgroundColor: themeColor}, styles.container]}>
        <Text className="font-mono text-2xl font-bold ">
          Choose Your Primary Color
        </Text>
        <View style={styles.pallete}>
          {Colors.map(i => (
            <Pressable
              key={i}
              onPress={() => changeTheme(i)}
              style={[styles.palletContainer, {backgroundColor: i}]}
            />
          ))}
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pallete: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-evenly',
  },
  palletContainer: {
    elevation: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
