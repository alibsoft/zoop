import qs from 'qs';

import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IBalance, IBalanceQuery } from './interfaces';

/**
 * Lista contas por buyer
 */
export const getBalanceByBuyer = (
  marketplace: IMarketplace,
  buyerId: string
) => {
  return marketplace.get<IBalance>(`/buyers/${buyerId}/balances`);
};
/**
 * Lista contas por seller
 */
export const getBalanceBySeller = (
  marketplace: IMarketplace,
  sellerId: string
) => {
  return marketplace.get<IBalance>(`/sellers/${sellerId}/balances`);
};

/**
 * Listar histórico de lançamentos pelo identificador da conta
 */
export const getHistoryBalance = (
  marketplace: IMarketplace,
  balanceId: string
) => {
  return marketplace.get<IResponse<unknown>>(`/balances/${balanceId}/history`);
};
/**
 * Listar histórico de lançamentos de conta por seller
 */
export const getHistoryBalanceBySeller = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IBalanceQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<unknown>>(
    `/sellers/${sellerId}/balances/history?${queryString}`
  );
};
/**
 * Listar histórico de lançamentos de conta por seller
 */
export const getHistoryBalanceByBuyer = (
  marketplace: IMarketplace,
  buyerId: string,
  query?: IBalanceQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<unknown>>(
    `/buyers/${buyerId}/balances/history?${queryString}`
  );
};
