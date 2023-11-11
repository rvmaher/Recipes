import auth from '@react-native-firebase/auth';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import {user_iv, validationSchema} from '../../typings/user';

const FirebaseLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    validationSchema,
    initialValues: user_iv,
    onSubmit: v => {
      setIsLoading(true);
      v.isRegistering ? handleRegister() : handleLogin();
    },
  });

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isValid,
  } = formik;

  const {email, password, isRegistering} = values;

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        Alert.alert('Logged in successfully');
      })
      .catch(err => {
        Alert.alert(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        Alert.alert('Logged in successfully');
      })
      .catch(err => {
        Alert.alert(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View className="flex-1 justify-center px-10">
      <View className="bg-slate-100 p-4 rounded-md items-center">
        <Text className="text-amber-600 font-bold text-xl mb-2 tracking-widest">
          {isRegistering ? 'Register' : 'Login'}
        </Text>
        <View className="w-full space-y-2">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            className="bg-slate-50 w-full px-3 font-semibold tracking-wider rounded-md shadow-slate-500 shadow-lg"
          />
          {touched.email && errors.email && (
            <FormikError error={errors.email} />
          )}
        </View>
        <View className="w-full py-3 flex">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            className="bg-slate-50 w-full px-3 font-semibold tracking-wider rounded-md shadow-slate-500 shadow-lg"
          />
          {touched.password && errors.password && (
            <FormikError error={errors.password} />
          )}
        </View>
        {isLoading ? (
          <ActivityIndicator color={'orange'} />
        ) : (
          <Pressable
            disabled={!isValid}
            className={`bg-amber-500 py-1 px-4 rounded-lg opacity-${
              isValid ? 100 : 30
            }`}
            onPress={() => handleSubmit()}>
            <Text className="text-white font-medium text-sm tracking-wider">
              Ok
            </Text>
          </Pressable>
        )}
        <Pressable
          className="py-3 px-4 rounded-lg"
          onPress={() => setFieldValue('isRegistering', !isRegistering)}>
          <Text className="text-grey font-medium text-sm tracking-wider">
            {isRegistering
              ? 'Already have an Account?'
              : "Don't have an Account?"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FirebaseLogin;

const FormikError: React.FC<{error: string}> = ({error}) => {
  return (
    <Text className="self-start text-red-500 px-2 py-1 text-sm font-bold">
      {error}
    </Text>
  );
};
