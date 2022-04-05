import { yup } from '../utils';

const accountScheme = {
  holder_name: yup.string().required('holder_name is required'),
  bank_code: yup.number().required('bank_code is required'),
  routing_number: yup.number().required('routing_number is required'),
  account_number: yup.number().required('account_number is required'),
};
export const bankAccountPFScheme = yup.object({
  ...accountScheme,
  taxpayer_id: yup
    .string()
    .cpf('taxpayer_id is not valid')
    .required('taxpayer_id is required'),
});
export const bankAccountPJScheme = yup.object({
  ...accountScheme,
  ein: yup.string().cnpj('ein is not valid').required('ein is required'),
});
