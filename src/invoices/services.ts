import qs from 'qs';

import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { IInvoice } from './interfaces';

/**
 * Criar uma fatura avulsa
 */
export const createInvoice = (marketplace: IMarketplace, body: IInvoice) => {
  return marketplace.post<IInvoice, unknown>(`/invoices`, body, { version: 2 });
};
/**
 * Alterar detalhes de uma fatura pelo identificador
 */
export const updateInvoice = (
  marketplace: IMarketplace,
  invoiceId: string,
  body: IInvoice
) => {
  return marketplace.put<IInvoice, unknown>(`/invoices/${invoiceId}`, body, {
    version: 2,
  });
};
/**
 * Remover uma fatura pelo identificador
 */
export const deleteInvoice = (marketplace: IMarketplace, invoiceId: string) => {
  return marketplace.delete<IInvoice>(`/invoices/${invoiceId}`, {
    version: 2,
  });
};
/**
 * Estornar e reembolsar fatura
 */
export const chargebackInvoice = (
  marketplace: IMarketplace,
  invoiceId: string
) => {
  return marketplace.post<IInvoice, unknown>(
    `/invoices/${invoiceId}/void`,
    {},
    {
      version: 2,
    }
  );
};
/**
 * Listar todas as faturas de um marketplace
 */
export const getInvoices = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IInvoice>>(`/invoices?${queryString}`, {
    version: 2,
  });
};
/**
 * Listar os detalhes de uma fatura pelo identificador
 */
export const getInvoice = (marketplace: IMarketplace, invoiceId: string) => {
  return marketplace.get<IInvoice>(`/invoices/${invoiceId}`, {
    version: 2,
  });
};
/**
 * Listar faturas associadas a um vendedor pelo identificador
 */
export const getInvoiceBySeller = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IInvoice>(
    `/sellers/${sellerId}/invoices?${queryString}`,
    {
      version: 2,
    }
  );
};
