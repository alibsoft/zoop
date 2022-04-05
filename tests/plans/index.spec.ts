/* eslint-disable functional/no-return-void */
import { createBuyer } from '../../src/buyers';
import { buyer, marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Vendedores', () => {
  test('Criar novo vendedor do tipo indivíduo', async () => {
    try {
      const res = await createBuyer(marketplace, buyer);
      const data = res.data;
      expect(data.id).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
});
