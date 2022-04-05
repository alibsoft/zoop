/* eslint-disable functional/no-return-void */

import {
  getReceivable,
  getReceivableBySeller,
  getReceivableByTransaction,
} from '../../src/receivables';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Recebiveis Test', () => {
  /**
   * Listar detalhes de recebível
   */
  test('Listar detalhes de recebível', async () => {
    const receivableId = '9a33e7be49c441bd8965740bd6d90737';
    const res = await getReceivable(marketplace, receivableId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Listar recebíveis por transação
   */
  test('Listar recebíveis por transação', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const res = await getReceivableByTransaction(marketplace, transactionId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar recebíveis por seller
   */
  test('Listar recebíveis por seller', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getReceivableBySeller(marketplace, sellerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
});
