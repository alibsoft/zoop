import qs from 'qs';

import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import {
  IFutureTransferQuery,
  IReceivingPolicy,
  ITransferQuery,
} from './interfaces';

/**
 * Listar transferências por marketplace
 */
export const getTransfers = (
  marketplace: IMarketplace,
  query?: ITransferQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get(`/transfers?${queryString}`);
};
/**
 * Recuperar detalhes de transferência
 */
export const getTransfer = (marketplace: IMarketplace, transferId: string) => {
  return marketplace.get<IResponse<unknown>>(`/transfers/${transferId}`);
};
/**
 * Cancelar transferência agendada anteriormente à data prevista para efetivação
 */
export const cancelTransfer = (
  marketplace: IMarketplace,
  transferId: string
) => {
  return marketplace.delete(`/transfers/${transferId}`);
};
/**
 * Listar detalhes de recebível
 */
export const getTransfersBySeller = (
  marketplace: IMarketplace,
  sellerId: string
) => {
  return marketplace.get<IResponse<unknown>>(`/sellers/${sellerId}/transfers`);
};
/**
 * Listar transações associadas a transferência
 */
export const getTransferOnTransactions = (
  marketplace: IMarketplace,
  transferId: string
) => {
  return marketplace.get(`/transfers/${transferId}/transactions`);
};
/**
 * Listar lançamentos futuros por seller
 */
export const getFutureTransfers = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IFutureTransferQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<unknown>>(
    `/sellers/${sellerId}/future-transfers?${queryString}`,
    { version: 2 }
  );
};

/**
 * Recuperar política de recebimento por seller
 */
export const getReceivingPolicy = (
  marketplace: IMarketplace,
  sellerId: string
) => {
  return marketplace.get(`/sellers/${sellerId}/receiving_policy`);
};
/**
 * Recuperar política de recebimento por seller
 */
export const updateReceivingPolicy = (
  marketplace: IMarketplace,
  sellerId: string,
  body: IReceivingPolicy
) => {
  return marketplace.post(`/sellers/${sellerId}/receiving_policy`, body);
};
