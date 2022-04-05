/* eslint-disable functional/no-return-void */
import { getMcCodes } from '../../src/sellers';
import { signInUser } from '../../src/users';
import { credentials, marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Marketplace Test', () => {
  test('Create Seller Individuals', async () => {
    try {
      const res = await getMcCodes(marketplace);
      const data = res.data;
      expect(data.total).toBeGreaterThan(0);
    } catch (error) {
      console.log(error);
    }
  });
  test('Verificar acesso de usuário do Dashboard e Minha Conta', async () => {
    try {
      const res = await signInUser(marketplace, credentials);
      const data = res.data;
      expect(data).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
});
