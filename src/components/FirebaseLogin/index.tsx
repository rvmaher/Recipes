import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import CapsuleButton from '@components/CapsuleButton';
import {FIREBASE_ERRORS} from '@constants/firebaseErrors';
import auth from '@react-native-firebase/auth';
import {user_iv, validationSchema} from '@typings/user';
import {useFormik} from 'formik';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {alert} from '@utils/helpers';

type Props = {
  onSuccess: () => void;
};

const FirebaseLogin: React.FC<Props> = ({onSuccess}) => {
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
      .then(() => {
        onSuccess();
        alert('Logged in!', 800);
      })
      .catch(err => {
        alert(FIREBASE_ERRORS?.[err.code] || 'Something went wrong', 200);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        onSuccess();
        alert('Logged in!', 800);
      })
      .catch(err => {
        alert(FIREBASE_ERRORS?.[err.code] || 'Something went wrong', 200);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View className="flex-1 justify-center px-10">
      <View className="bg-slate-100 p-4 rounded-md items-center">
        <Animated.Text
          entering={FadeIn.duration(500)}
          key={isRegistering ? 're' : 'lo'}
          className="text-amber-600 font-bold text-xl mb-2 tracking-widest">
          {isRegistering ? 'Register' : 'Login'}
        </Animated.Text>
        <View className="w-full space-y-2">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            className="bg-slate-50 h-10 w-full px-3 font-semibold tracking-wider rounded-md shadow-slate-500 "
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
            className="bg-slate-50 h-10 w-full px-3 font-semibold tracking-wider rounded-md shadow-slate-500 "
          />
          {touched.password && errors.password && (
            <FormikError error={errors.password} />
          )}
        </View>
        {isLoading ? (
          <ActivityIndicator color={'orange'} />
        ) : (
          <CapsuleButton
            btnText="Submit"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        )}
        <CapsuleButton
          btnText={
            isRegistering
              ? 'Already have an Account?'
              : "Don't have an Account?"
          }
          onPress={() => setFieldValue('isRegistering', !isRegistering)}
          bgColor="bg-gray-400"
        />
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
