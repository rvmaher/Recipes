import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('password is required')
    .min(6, 'password is too short!'),
  isRegistering: Yup.boolean().required(),
});

type User = Yup.InferType<typeof validationSchema>;

const user_iv: User = {
  email: '',
  password: '',
  isRegistering: false,
};
export type {User};

export {validationSchema, user_iv};
