import qs from 'qs';

import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { ISubscription } from './interfaces';

/**
 * Criar uma assinatura entre um comprador e um plano
 */
export const createSubscription = (
  marketplace: IMarketplace,
  body: ISubscription
) => {
  return marketplace.post<ISubscription, ISubscription>(
    `/subscriptions`,
    body,
    {
      version: 2,
    }
  );
};
/**
 * Alterar os detalhes de uma assinatura pelo identificador
 */
export const updateSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string,
  body: ISubscription
) => {
  return marketplace.put<ISubscription, ISubscription>(
    `/subscriptions/${subscriptionId}`,
    body,
    { version: 2 }
  );
};

/**
 * Listar os detalhes de uma assinatura pelo identificador
 */
export const getSubscriptions = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<ISubscription>>(
    `/subscriptions?${queryString}`,
    { version: 2 }
  );
};
/**
 * Listar detalhes de plano de venda
 */
export const getSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string
) => {
  return marketplace.get<ISubscription>(`/subscriptions/${subscriptionId}`, {
    version: 2,
  });
};
/**
 * Listar assinatura de plano de venda por seller
 */
export const getSubscriptionsBySeller = (
  marketplace: IMarketplace,
  sellerId: string
) => {
  return marketplace.get<ISubscription>(`/sellers/${sellerId}/subscriptions`, {
    version: 2,
  });
};
/**
 * Remover uma assinatura pelo identificador
 */
export const deleteSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string
) => {
  return marketplace.delete<ISubscription>(`/subscriptions/${subscriptionId}`, {
    version: 2,
  });
};

/**
 * Suspender uma assinatura pelo identificador
 */
export const suspendSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string
) => {
  return marketplace.post(
    `/subscriptions/${subscriptionId}/suspend`,
    {},
    {
      version: 2,
    }
  );
};
/**
 * Reativa uma assinatura pelo identificador
 */
export const reactivateSubscription = (
  marketplace: IMarketplace,
  subscriptionId: string
) => {
  return marketplace.post(
    `/subscriptions/${subscriptionId}/reactivate`,
    {},
    {
      version: 2,
    }
  );
};
