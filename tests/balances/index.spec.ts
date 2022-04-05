/* eslint-disable functional/no-return-void */

import { marketplace } from '..';
import {
  getBalanceByBuyer,
  getBalanceBySeller,
  getHistoryBalance,
  getHistoryBalanceByBuyer,
  getHistoryBalanceBySeller,
} from '../../src/balances';

/* Marketplace Tests API
 */
describe('Balances Test', () => {
  /**
   * Lista contas por buyer
   */

  test('Lista contas por buyer', async () => {
    const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
    const res = await getBalanceByBuyer(marketplace, buyerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar histórico de lançamentos pelo identificador da conta
   */

  test('Listar histórico de lançamentos pelo identificador da conta', async () => {
    const balanceId = '4040eb7f4b384cebbafb052f93de838e';
    const res = await getHistoryBalance(marketplace, balanceId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Recuperar saldo de conta por seller
   */

  test('Recuperar saldo de conta por seller', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getBalanceBySeller(marketplace, sellerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar histórico de lançamentos de conta por buyer
   */

  test('Listar histórico de lançamentos de conta por buyer', async () => {
    const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
    const res = await getHistoryBalanceByBuyer(marketplace, buyerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar histórico de lançamentos de conta por seller
   */

  test('Listar histórico de lançamentos de conta por seller', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getHistoryBalanceBySeller(marketplace, sellerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
});
