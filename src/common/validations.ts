import { yup } from '../utils';

export const addressScheme = {
  line1: yup.string().required('line1 is required'),
  line2: yup.string().required('line2 is required'),
  neighborhood: yup.string().required('neighborhood is required'),
  city: yup.string().required('city is required'),
  state: yup
    .string()
    .matches(/^[A-Z]{2}$/gm, 'state not is valid')
    .required('state is required'),
  postal_code: yup
    .string()
    .matches(/^[0-9]{8}$/gm, 'postal_code not is valid')
    .required('postal_code is required'),
  country_code: yup
    .string()
    .matches(/^[A-Z]{2}$/gm, 'country_code not is valid')
    .required('country_code is required'),
};

export const ownerScheme = {
  birthdate: yup.date().required('birthdate is required'),
  email: yup.string().email('email not is valid').required('email is required'),
  first_name: yup.string().required('first_name is required'),
  last_name: yup.string().required('last_name is required'),
  phone_number: yup.string().defined(),
  taxpayer_id: yup
    .string()
    .cpf('taxpayer_id not is valid')
    .required('taxpayer_id is required'),
};
