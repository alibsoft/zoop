/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable functional/no-this-expression */
// yup-extended.ts
import cardValidator from 'card-validator';
import { passwordStrength } from 'check-password-strength';
import * as Yup from 'yup';

const brValidator = require('br-validations');

Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'creditCardNumber',
  function (errorMessage) {
    return this.test(
      `creditcard-number-is-valid`,
      errorMessage,
      function (value) {
        const { path, createError } = this;
        const validator = cardValidator.number(value);
        return (
          validator.isValid || createError({ path, message: errorMessage })
        );
      }
    );
  }
);
Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'creditCardCvv',
  function (errorMessage) {
    return this.test(`creditcard-cvv-is-valid`, errorMessage, function (value) {
      const { path, createError } = this;
      const validator = cardValidator.cvv(value);
      return validator.isValid || createError({ path, message: errorMessage });
    });
  }
);
Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'creditCardHolderName',
  function (errorMessage) {
    return this.test(
      `creditcard-holder-name-is-valid`,
      errorMessage,
      function (value) {
        const { path, createError } = this;
        const validator = cardValidator.cardholderName(value);
        return (
          validator.isValid || createError({ path, message: errorMessage })
        );
      }
    );
  }
);
Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'creditCardExpirationYear',
  function (errorMessage) {
    return this.test(
      `creditcard-expiration-year-is-valid`,
      errorMessage,
      function (value) {
        const { path, createError } = this;
        const validator = cardValidator.expirationYear(value);
        return (
          validator.isValid || createError({ path, message: errorMessage })
        );
      }
    );
  }
);
Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'creditCardExpirationMonth',
  function (errorMessage) {
    return this.test(
      `creditcard-expiration-month-is-valid`,
      errorMessage,
      function (value) {
        const { path, createError } = this;
        const validator = cardValidator.expirationMonth(value);
        return (
          validator.isValid || createError({ path, message: errorMessage })
        );
      }
    );
  }
);

Yup.addMethod<Yup.StringSchema>(Yup.string, 'cnpj', function (errorMessage) {
  return this.test(`cnpj-is-valid`, errorMessage, function (value) {
    const { path, createError } = this;
    const isValid = brValidator.cnpj.validate(value);
    return isValid || createError({ path, message: errorMessage });
  });
});

Yup.addMethod<Yup.StringSchema>(Yup.string, 'cpf', function (errorMessage) {
  return this.test(`cpf-is-valid`, errorMessage, function (value) {
    const { path, createError } = this;
    const isValid = brValidator.cpf.validate(value);
    return isValid || createError({ path, message: errorMessage });
  });
});
Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'password',
  function (errorMessage) {
    return this.test(`password-is-valid`, errorMessage, function (value) {
      const { path, createError } = this;
      const passwordCheck = passwordStrength(value || '');
      const isValid = passwordCheck.id >= 2; // Medium or Strong
      return isValid || createError({ path, message: errorMessage });
    });
  }
);
declare module 'yup' {
  interface StringSchema {
    cnpj(number: string): StringSchema;
    cpf(number: string): StringSchema;
    password(password: string): StringSchema;
    creditCardNumber(number: string): StringSchema;
    creditCardCvv(number: string): StringSchema;
    creditCardHolderName(name: string): StringSchema;
    creditCardExpirationMonth(date: string): StringSchema;
    creditCardExpirationYear(date: string): StringSchema;
  }
}

export default Yup;
