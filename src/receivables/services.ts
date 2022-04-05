import qs from 'qs';

import { IMarketplace } from '../marketplace';

import { IReceivable, IReceivableQuery } from './interfaces';

/**
 * Listar detalhes de recebível
 */
export const getReceivable = (
  marketplace: IMarketplace,
  receivableId: string
) => {
  return marketplace.get<IReceivable>(`/receivables/${receivableId}`);
};

/**
 * Listar recebíveis por transação
 */
export const getReceivableByTransaction = (
  marketplace: IMarketplace,
  transactionId: string
) => {
  return marketplace.get<IReceivable>(
    `/transactions/${transactionId}/receivables`
  );
};
/**
 * Listar recebíveis por seller
 */
export const getReceivableBySeller = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IReceivableQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IReceivable>(
    `/sellers/${sellerId}/receivables?${queryString}`
  );
};
