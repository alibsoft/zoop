import { IDelete, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IFee } from './interfaces';

import { IFeeSubscription } from '.';

/**
 * Listar plano de vendas por marketplace
 */
export const getFees = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<IFee>>(`/plans`);
};
/**
 * Listar plano de vendas por marketplace
 */
export const getFee = (marketplace: IMarketplace) => {
  return marketplace.get<IFee>(`/plans`);
};
/**
 * Listar assinaturas de plano de venda
 */
export const getFeesSubscription = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<IFeeSubscription>>(`/subscriptions`);
};
/**
 * Listar detalhes de assinatura de plano de venda
 */
export const getFeeSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string
) => {
  return marketplace.get<IFeeSubscription>(`/subscriptions/${subscriptionId}`);
};
/**
 * Listar detalhes de plano de venda
 */
export const attachFeeSubscription = (
  marketplace: IMarketplace,
  customerId: string,
  planId: string,
  quantity: number
) => {
  return marketplace.post<IFeeSubscription, unknown>(`/subscriptions`, {
    customer: customerId,
    plan: planId,
    quantity,
  });
};
/**
 * Desassociar plano de venda
 */

export const unattachFeeSubscription = (
  marketplace: IMarketplace,
  subscriptionId: number
) => {
  return marketplace.delete<IDelete>(`/subscriptions/${subscriptionId}`);
};
