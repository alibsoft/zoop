import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IAjustment } from './interfaces';

/**
 * Criar ajuste de cobrança informando pagador e recebedor
 */
export const createAjustment = (
  marketplace: IMarketplace,
  owner: string,
  receiver: string,
  body: IAjustment
) => {
  return marketplace.post(`/adjustments/${owner}/to/${receiver}`, body);
};
/**
 * Criar ajuste de cobrança informando somente pagador
 */
export const createAjustmentOwner = (
  marketplace: IMarketplace,
  owner: string,
  body: IAjustment
) => {
  return marketplace.post(`/adjustments/${owner}`, body);
};
/**
 * Criar ajuste de cobrança informando somente pagador
 */
export const getAjustments = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<unknown>>(`/adjustments`);
};
/**
 * Recuperar detalhes de ajuste de cobrança
 */
export const getAjustment = (
  marketplace: IMarketplace,
  ajustmentId: string
) => {
  return marketplace.get(`/adjustments/${ajustmentId}`);
};
/**
 * Cancelar ajuste de cobrança agendado anteriormente à data prevista para efetivação
 */
export const cancelAjustment = (
  marketplace: IMarketplace,
  ajustmentId: string
) => {
  return marketplace.delete(`/adjustments/${ajustmentId}`);
};
