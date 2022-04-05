import { IMarketplace } from '../marketplace';

import {
  ISplitGrossValue,
  ISplitPercentage,
  ISplitRecipientPercentage,
  ISplitRecipientValue,
  ISplitValue,
} from './interfaces';

/**
 * Criar Split por transação
 */
const createSplitByTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  body:
    | ISplitValue
    | ISplitRecipientValue
    | ISplitGrossValue
    | ISplitPercentage
    | ISplitRecipientPercentage
) => {
  return marketplace.post(`transactions/${transactionId}/split_rules`, body);
};
/**
 * Criar Split por valor ou Percentagem taxas do seller (principal)
 */
export const createSplit = (
  marketplace: IMarketplace,
  transactionId: string,
  body: ISplitValue | ISplitPercentage
) => {
  return createSplitByTransaction(marketplace, transactionId, body);
};

/**
 * Criar Split por valor ou porcentagem recipient assume o valor total da taxa
 */
export const createSplitRecepient = (
  marketplace: IMarketplace,
  transactionId: string,
  body: ISplitRecipientValue | ISplitRecipientPercentage
) => {
  const newBody: ISplitRecipientValue | ISplitRecipientPercentage = {
    ...body,
    charge_recipient_processing_fee: 'true',
  };
  return createSplitByTransaction(marketplace, transactionId, newBody);
};

/**
 * Criar Split por valor recipient assume o valor total da taxa
 */
export const createSplitRecepientGross = (
  marketplace: IMarketplace,
  transactionId: string,
  body: ISplitGrossValue
) => {
  const newBody: ISplitGrossValue = {
    ...body,
    is_gross_amount: 'true',
    charge_recipient_processing_fee: 'true',
  };
  return createSplitByTransaction(marketplace, transactionId, newBody);
};
/**
 * Recupera detalhes de Split por ID
 */
export const getSplitByTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  splitId: string
) => {
  return marketplace.get(
    `transactions/${transactionId}/split_rules/${splitId}`
  );
};
/**
 * Listar detalhes de Split por transação
 */
export const getSplitRulesByTransaction = (
  marketplace: IMarketplace,
  transactionId: string
) => {
  return marketplace.get(`transactions/${transactionId}/split_rules`);
};
/**
 * Alterar Split por transação
 */
export const updateSplitByTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  splitId: string,
  body:
    | ISplitValue
    | ISplitRecipientValue
    | ISplitGrossValue
    | ISplitPercentage
    | ISplitRecipientPercentage
) => {
  return marketplace.put(
    `transactions/${transactionId}/split_rules/${splitId}`,
    body
  );
};
/**
 * Remover Split por transação
 */
export const deleteSplitByTransaction = (
  marketplace: IMarketplace,
  transactionId: string,
  splitId: string
) => {
  return marketplace.delete(
    `transactions/${transactionId}/split_rules/${splitId}`
  );
};
