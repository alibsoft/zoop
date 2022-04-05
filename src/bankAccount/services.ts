import { IDelete, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IBank, IBankAccount, IBankToken } from './interfaces';
import { bankAccountPFScheme, bankAccountPJScheme } from './validations';

/**
 * Get Bank Account by Id
 */
export const getBankAccount = (
  marketplace: IMarketplace,
  banckAccountId: string
) => {
  return marketplace.get<IBank>(`/bank_accounts/${banckAccountId}`);
};
/**
 * Get Bank Account by Seller
 * Lista todas as contas, ativas e inativas
 */
export const getBankAccountBySeller = (
  marketplace: IMarketplace,
  sellerId: string
) => {
  return marketplace.get<IBank>(`/sellers/${sellerId}/bank_accounts`);
};
/**
 * Get All Bank Accounts
 */
export const getBankAccounts = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<IBank>>(`/bank_accounts`);
};
/**
 * Create Bank Account
 */
export const createBankAccount = (
  marketplace: IMarketplace,
  body: IBankAccount
) => {
  body.taxpayer_id
    ? bankAccountPFScheme.validateSync(body)
    : bankAccountPJScheme.validateSync(body);

  return marketplace.post<IBankToken, IBankAccount>(
    `/bank_accounts/tokens`,
    body
  );
};

/**
 * Delete Bank Account
 */
export const deleteBankAccount = (
  marketplace: IMarketplace,
  bankAccountId: string
) => {
  return marketplace.delete<IDelete>(`/bank_accounts/${bankAccountId}`);
};

/**
 * Attch Bank To Customer
 */
export const attachBankAccount = (
  marketplace: IMarketplace,
  banckAccountId: string,
  customerId: string
) => {
  return marketplace.post<IBank, unknown>(`/bank_accounts`, {
    customer: customerId,
    token: banckAccountId,
  });
};
