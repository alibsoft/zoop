/* eslint-disable functional/no-return-void */

import {
  createSplit,
  deleteSplitByTransaction,
  getSplitByTransaction,
  getSplitRulesByTransaction,
  ISplitPercentage,
  updateSplitByTransaction,
} from '../../src/split';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Split Test', () => {
  /**
   * Listar detalhes de Split por transação
   */
  test('Listar detalhes de Split por transação', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const res = await getSplitRulesByTransaction(marketplace, transactionId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Criar Split por transação
   */
  test('Criar Split por transação', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const body: ISplitPercentage = {
      recipient: '51e9822d1ab74ad0a621d211b8392022',
      charge_processing_fee: 'true',
      percentage: 50,
      liable: true,
    };
    const res = await createSplit(marketplace, transactionId, body);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Recupera detalhes de Split por ID
   */
  test('Recupera detalhes de Split por ID', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const splitId = '51e9822d1ab74ad0a621d211b8392022';
    const res = await getSplitByTransaction(
      marketplace,
      transactionId,
      splitId
    );
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Alterar Split por transação
   */
  test('Alterar Split por transação', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const splitId = '51e9822d1ab74ad0a621d211b8392022';
    const body: ISplitPercentage = {
      recipient: '51e9822d1ab74ad0a621d211b8392022',
      charge_processing_fee: 'true',
      percentage: 50,
      liable: true,
    };
    const res = await updateSplitByTransaction(
      marketplace,
      transactionId,
      splitId,
      body
    );
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Remover Split por transação
   */
  test('Remover Split por transação', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const splitId = '51e9822d1ab74ad0a621d211b8392022';
    const res = await deleteSplitByTransaction(
      marketplace,
      transactionId,
      splitId
    );
    const data = res.data;
    expect(data).not.toBeNull();
  });
});
