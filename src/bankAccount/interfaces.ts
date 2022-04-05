import { IEnty, IMetadata } from '../common';
/**
 * Bank Account interface
 */
export interface IBankAccount extends IBank {
  readonly type?: AccountType;
}
/**
 * Bank Response interface
 */
export interface IBankToken extends IEnty {
  readonly bank_account?: IBankAccount;
}
/**
 * Bank Account Type Enum
 */
export enum BankAccountType {
  PF = 'taxpayer_id',
  PJ = 'ein',
}
/**
 * Account Type Enum
 */
export enum AccountType {
  CORRENTE = 'checking',
  POUPANCA = 'savings',
}
/**
 * Account interface
 */
export interface IAccount {
  readonly holder_name: string;
  readonly bank_code: string;
  readonly routing_number: number;
  readonly account_number: number;
  readonly taxpayer_id?: string;
  readonly ein?: string;
}
/**
 * Bank interface
 */
export interface IBank extends IAccount, IEnty {
  readonly address?: string;
  readonly country_code?: string;
  readonly customer?: string;
  readonly debitable?: string;
  readonly description?: string;
  readonly fingerprint?: string;
  readonly is_active?: string;
  readonly is_verified?: string;
  readonly last4_digits?: string;
  readonly metadata?: IMetadata;
  readonly phone_number?: string;
  readonly routing_check_digit?: string;
  readonly uri?: string;
  readonly verification_checklist?: IVCheckList;
}
/**
 * CheckList interface
 */
export interface IVCheckList {
  readonly postal_code_check?: string;
  readonly address_line1_check?: string;
  readonly deposit_check?: string;
}
