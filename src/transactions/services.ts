/* eslint-disable functional/no-throw-statement */
import qs from 'qs';

import { IMetadata, IResponse, PaymentType } from '../common';
import { IMarketplace } from '../marketplace';

import {
  IBoletoTransaction,
  ICancelledLetter,
  ICardTokenTransaction,
  ICustomerTransaction,
  IDirectTransaction,
  IPixTransaction,
  IQueryTransaction,
  IResponseTransaction,
} from './interfaces';
import {
  boletoTransactionScheme,
  customerTransactionScheme,
  pixTransactionScheme,
} from './validations';
/**
 * Criar transação
 */
const createTransaction = (
  marketplace: IMarketplace,
  body:
    | IBoletoTransaction
    | ICardTokenTransaction
    | IDirectTransaction
    | IPixTransaction
    | ICustomerTransaction
) => {
  return marketplace.post<
    IResponseTransaction,
    | IBoletoTransaction
    | ICardTokenTransaction
    | IDirectTransaction
    | IPixTransaction
    | ICustomerTransaction
  >('/transactions', body);
};
/**
 * Criar transação por consumidor id
 */
export const createCustomerTransaction = (
  marketplace: IMarketplace,
  body: ICustomerTransaction
) => {
  const mBody: ICustomerTransaction = {
    ...body,
    payment_type: PaymentType.CREDIT,
    capture: body.capture ?? true,
    currency: body.currency ?? 'BRL',
  };
  customerTransactionScheme.validateSync(mBody);
  return createTransaction(marketplace, mBody);
};
/**
 * Criar transação por token de cartão
 */
export const createCardTokenTransaction = (
  marketplace: IMarketplace,
  body: ICardTokenTransaction
) => {
  const mBody: ICardTokenTransaction = {
    ...body,
    payment_type: PaymentType.CREDIT,
    capture: body.capture ?? true,
    source: {
      ...body.source,
      usage: body.source.usage ?? 'single_use',
      type: body.source.type ?? 'card',
      currency: body.source.currency ?? 'BRL',
    },
  };
  // boletoTransactionScheme.validateSync(mBody);
  return createTransaction(marketplace, mBody);
};
/**
 * Criar transação por boleto
 */
export const createBoletoTransaction = (
  marketplace: IMarketplace,
  body: IBoletoTransaction
) => {
  const mBody: IBoletoTransaction = {
    ...body,
    payment_type: PaymentType.BOLETO,
    currency: body.currency ?? 'BRL',
  };
  boletoTransactionScheme.validateSync(mBody);
  return createTransaction(marketplace, mBody);
};
/**
 * Criar transação por autorização direta
 */
export const createDirectTransaction = (
  marketplace: IMarketplace,
  body: IDirectTransaction
) => {
  const mBody: IDirectTransaction = {
    ...body,
    payment_type: PaymentType.CREDIT,
    capture: body.capture ?? true,
    source: {
      ...body.source,
      usage: body.source.usage ?? 'single_use',
      type: body.source.type ?? 'card',
      currency: body.source.currency ?? 'BRL',
    },
  };
  return createTransaction(marketplace, mBody);
};
/**
 * Criar transação por pix
 */
export const createPixTransaction = (
  marketplace: IMarketplace,
  body: IPixTransaction
) => {
  const mBody: IPixTransaction = {
    ...body,
    payment_type: PaymentType.PIX,
    currency: body.currency || 'BRL',
  };
  pixTransactionScheme.validateSync(mBody);
  return createTransaction(marketplace, mBody);
};
/**
 * Listar transações do marketplace
 */
export const getTransactions = (
  marketplace: IMarketplace,
  query?: IQueryTransaction
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IResponseTransaction>>(
    `/transactions?${queryString}`
  );
};
/**
 * Listar transações por vendedor
 */
export const getTransactionsBySeller = (
  marketplace: IMarketplace,
  selleId: string,
  query?: IQueryTransaction
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IResponseTransaction>>(
    `/sellers/${selleId}/transactions?${queryString}`
  );
};
/**
 * Listar detalhes de transação pelo identificador
 */
export const getTransaction = (
  marketplace: IMarketplace,
  transactionId: string
) => {
  return marketplace.get<IResponseTransaction>(
    `/transactions/${transactionId}`
  );
};

/**
 * Alterar detalhes de transação pelo identificador
 */
export const updateTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  description?: string,
  metadata?: IMetadata
) => {
  return marketplace.put<IResponseTransaction, unknown>(
    `/transactions/${transactionId}`,
    { description, metadata }
  );
};
/**
 * Estornar transação cartão não presente
 */
export const chargebackTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  sellerId: string,
  amount: number,
  rules?: IMetadata
) => {
  return marketplace.post<IResponseTransaction, unknown>(
    `/transactions/${transactionId}/void`,
    { on_behalf_of: sellerId, amount, void_rules: rules }
  );
};

/**
 * Disponibilizar link carta de cancelamento
 */
export const cancelledLetterTransaction = (
  marketplace: IMarketplace,
  transactionId: string
) => {
  return marketplace.get<ICancelledLetter>(
    `/transactions/${transactionId}/cancelled-letter`
  );
};
/**
 * Capturar transação cartão não presente
 */
export const captureTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  sellerId: string,
  amount: number
) => {
  return marketplace.post<IResponseTransaction, unknown>(
    `/transactions/${transactionId}/capture`,
    { on_behalf_of: sellerId, amount }
  );
};
/**
 * Aprovar transação (somente sandbox)
 */
export const approveTransaction = (
  marketplace: IMarketplace,
  transactionId: string
) => {
  if (!marketplace.isSandbox)
    throw new Error('Only available in test environment');

  return marketplace.post<IResponseTransaction, unknown>(
    `/transactions/${transactionId}/approve`,
    {}
  );
};
