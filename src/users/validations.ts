import { yup } from '../utils';

const credentialScheme = {
  username: yup
    .string()
    .email('username is not valid')
    .required('username is required'),
  password: yup
    .string()
    .password('password is not valid')
    .required('password is required'),
};
const profileScheme = {
  first_name: yup.string().required('first_name is required'),
  last_name: yup.string().required('last_name is required'),
};
export const signInUserScheme = yup.object({
  ...credentialScheme,
});
export const userScheme = yup.object({
  ...profileScheme,
  ...credentialScheme,
});
