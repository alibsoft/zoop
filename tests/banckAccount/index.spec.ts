/* eslint-disable functional/no-return-void */

import {
  attachBankAccount,
  createBankAccount,
  deleteBankAccount,
  getBankAccount,
  getBankAccountBySeller,
  getBankAccounts,
} from '../../src/bankAccount';
import { bankAccount, marketplace } from '../index';
// 3e8071ce177e4d0c891edb7150a4932f; token
// 0757628e12fa4b8c8fd1a1b6515672df;bank id
/**
 * Marketplace Tests API
 */
describe('Banck Account Test', () => {
  /**
   * Criar novo token de conta bancária
   */

  test('Criar novo token de conta bancária', async () => {
    const res = await createBankAccount(marketplace, bankAccount);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Associar conta bancaria ao customer
   */
  test('Associar conta bancaria ao customer', async () => {
    //customerId: Seller | Buyer

    const customerId = '2c856c75555c48b0ae6050cd76797fcd';
    const tokenId = '3e8071ce177e4d0c891edb7150a4932f';
    const res = await attachBankAccount(marketplace, tokenId, customerId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Listar contas bancárias por marketplace
   * Lista todas as contas, ativas e inativas
   */

  test('Listar contas bancárias por marketplace', async () => {
    const res = await getBankAccounts(marketplace);
    const data = res.data;
    expect(data.total).toBeGreaterThanOrEqual(0);
  });
  /**
   * Listar contas bancárias por seller
   */

  test('Listar contas bancárias por seller', async () => {
    const customerId = '2c856c75555c48b0ae6050cd76797fcd';
    const res = await getBankAccountBySeller(marketplace, customerId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Listar detalhes de conta bancária por identificador
   */
  test('Listar detalhes de conta bancária por identificador', async () => {
    const bankAccountId = '963703f46d9846809e5e0bf05a18a067';
    const res = await getBankAccount(marketplace, bankAccountId);
    const data = res.data;
    expect(data.id).toBe(bankAccountId);
  });
  /**
   * Remover conta bancária
   * Obs: Não remove, apenas desabilita
   */
  test('Remover conta bancária', async () => {
    const bankAccountId = '963703f46d9846809e5e0bf05a18a067';
    const res = await deleteBankAccount(marketplace, bankAccountId);
    const data = res.data;
    expect(data.id).toBe(bankAccountId);
  });
});
