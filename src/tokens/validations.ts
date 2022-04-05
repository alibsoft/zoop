import { yup } from '../utils';

export const cardScheme = yup.object({
  card_number: yup
    .string()
    .creditCardNumber('card_number is not valid')
    .required('card_number is required'),
  holder_name: yup
    .string()
    .creditCardHolderName('holder_name is not valid')
    .required('holder_name is required'),
  expiration_month: yup
    .string()
    .creditCardExpirationMonth('expiration_month is not valid')
    .required('expiration_month is required'),
  expiration_year: yup
    .string()
    .creditCardExpirationYear('expiration_year is not valid')
    .required('expiration_year is required'),
  security_code: yup
    .string()
    .creditCardCvv('security_code is not valid')
    .required('security_code is required'),
});
