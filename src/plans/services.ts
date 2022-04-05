import qs from 'qs';

import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IPlan } from './interfaces';
/**
 * Criar um plano
 */
export const createPlan = (marketplace: IMarketplace, body: IPlan) => {
  return marketplace.post(`/plans`, body, { version: 2 });
};
/**
 * Listar plano de vendas por marketplace
 */
export const getPlans = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IPlan>>(`/plans?${queryString}`, {
    version: 2,
  });
};
/**
 * Listar detalhes de plano de venda
 */
export const getPlan = (marketplace: IMarketplace, planId: string) => {
  return marketplace.get<IPlan>(`/plans/${planId}`, { version: 2 });
};
/**
 * Alterar plano pelo identificador
 */
export const updatePlan = (
  marketplace: IMarketplace,
  planId: string,
  body: IPlan
) => {
  return marketplace.put(`/plans/${planId}`, body, { version: 2 });
};
/**
 * Alterar plano pelo identificador
 */
export const deletePlan = (marketplace: IMarketplace, planId: string) => {
  return marketplace.delete(`/plans/${planId}`, { version: 2 });
};
