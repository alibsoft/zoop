import { yup } from '../utils';
const transactionScheme = {
  on_behalf_of: yup.string().required('on_behalf_of is required'),
  amount: yup
    .number()
    .integer()
    .min(100, 'minimum value is 100')
    .required('amount is required'),
};

export const pixTransactionScheme = yup.object({
  ...transactionScheme,
});

export const boletoTransactionScheme = yup.object({
  ...transactionScheme,
  customer: yup.string().required('customer is required'),
});
export const customerTransactionScheme = yup.object({
  ...transactionScheme,
  customer: yup.string().required('customer is required'),
});
