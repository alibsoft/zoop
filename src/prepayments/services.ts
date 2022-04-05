import qs from 'qs';

import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IPrePayment } from './interfaces';

import { IFuturePrePayment, IPrePaymentQuery } from '.';

/**
 * Criação de novo pedido de antecipação
 */
export const createPrePayment = (
  marketplace: IMarketplace,
  body: IPrePayment
) => {
  return marketplace.post(`/prepayments`, body);
};
/**
 * Listagem de antecipações do Marketplace
 */
export const getPrePayments = (marketplace: IMarketplace) => {
  return marketplace.get<readonly IPrePayment[]>(`/prepayments`);
};
/**
 * Listagem de antecipações do Seller
 */
export const getPrePaymentsBySeller = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IPrePaymentQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IPrePayment> | readonly IPrePayment[]>(
    `/sellers/${sellerId}/prepayments?${queryString}`
  );
};
/**
 * Recupera informações da agenda futura do Seller
 */
export const getFuturePrePaymentsBySeller = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IPrePayment
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IFuturePrePayment>(
    `/sellers/${sellerId}/prepayments/info?${queryString}`
  );
};
/**
 * Detalhe de antecipação
 */
export const getPrePayment = (
  marketplace: IMarketplace,
  prePaymentId: string
) => {
  return marketplace.get<IPrePayment>(`/prepayments/${prePaymentId}`);
};

/**
 * Atualização de status da antecipação
 */
export const commitPrePayment = (
  marketplace: IMarketplace,
  prePaymentId: string
) => {
  return marketplace.get<IPrePayment>(`/prepayments/${prePaymentId}/commit`);
};
/**
 * Verificando Recebíveis Aptos a Antecipação
 */
export const receivablesPrePayment = (
  marketplace: IMarketplace,
  customerId: string,
  prepayable_for: string
) => {
  return marketplace.get<IPrePayment>(
    `/sellers/${customerId}/receivables?${prepayable_for}`
  );
};
