import { addressScheme, ownerScheme } from '../common';
import { yup } from '../utils';

export const merchantScheme = {
  mcc: yup.string().required('mcc is required'),
};

export const sellerScheme = yup.object({
  ...ownerScheme,
  ...merchantScheme,
  address: yup.object({
    ...addressScheme,
  }),
});
export const businessScheme = yup.object({
  owner: yup.object({
    ...ownerScheme,
  }),
  owner_address: yup.object({
    ...addressScheme,
  }),
  business_name: yup.string().required('business_name is required'),
  business_email: yup
    .string()
    .email('email not is valid')
    .required('email is required'),
  ein: yup.string().cnpj('ein not is valid').required('ein is required'),
  business_address: yup.object({
    ...addressScheme,
  }),
  ...merchantScheme,
});
