/* eslint-disable functional/no-return-void */

import { getFees } from '../../src/fee';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Fee Test', () => {
  /**
   * Listar plano de vendas por marketplace
   */

  test('Listar plano de vendas por marketplace', async () => {
    const res = await getFees(marketplace);
    const data = res.data;
    expect(data.total).toBeGreaterThanOrEqual(0);
  });
});
