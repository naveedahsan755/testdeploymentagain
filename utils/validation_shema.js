import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Please enter at least 3 characters')
    .required('Username is a required field'),
  accountType: Yup.string().required('Select account is a required field'),
  businessName: Yup.string().when('accountType', {
    is: 'Business',
    then: Yup.string()
      .min(3, 'Please enter at least 3 characters')
      .required('Business name is a required field'),
    otherwise: Yup.string().min(3, 'Please enter at least 3 characters')
  }),
  website: Yup.string().when('accountType', {
    is: 'Business',
    then: Yup.string().required('Website address is a required field'),
    otherwise: Yup.string()
  }),

  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is a required field'),

  phone: Yup.string().min(11, 'Minimum 11 characters'),

  password: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Password is a required field')
});

export const LoginSchema = Yup.object().shape({
  checked: Yup.boolean(),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is a required field'),
  password: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Password is a required field')
});

export const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Email is a required field')
});

export const AuthenticateSchema = Yup.object().shape({
  tab1: Yup.string().required(''),
  tab2: Yup.string().required(''),
  tab3: Yup.string().required(''),
  tab4: Yup.string().required(''),
  tab5: Yup.string().required(''),
  tab6: Yup.string().required('')
});
