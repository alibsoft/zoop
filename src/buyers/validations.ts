import { addressScheme, ownerScheme } from '../common';
import { yup } from '../utils';

export const buyerScheme = yup.object({
  ...ownerScheme,
  address: yup.object({
    ...addressScheme,
  }),
});
