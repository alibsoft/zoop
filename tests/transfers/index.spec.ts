/* eslint-disable functional/no-return-void */
import { cancelTransfer, getFutureTransfers, getTransfer, getTransferOnTransactions, getTransfers, getTransfersBySeller } from '../../src/transfers';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Transfers Test', () => {
  /**
   * Listar transferências por seller
   */
  test('Listar transferências por seller', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getTransfersBySeller(marketplace, sellerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar transferências por marketplace
   */
  test('Listar transferências por marketplace', async () => {
    const res = await getTransfers(marketplace);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Recuperar detalhes de transferência
   */
  test('Recuperar detalhes de transferência', async () => {
    const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getTransfer(marketplace,transferId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Cancelar transferência agendada anteriormente à data prevista para efetivação
   */
   test('Cancelar transferência agendada anteriormente à data prevista para efetivação', async () => {
    const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await cancelTransfer(marketplace,transferId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar transações associadas a transferência
   */
   test('Cancelar transferência agendada anteriormente à data prevista para efetivação', async () => {
    const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getTransferOnTransactions(marketplace,transferId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar lançamentos futuros por seller
   */
   test('Listar lançamentos futuros por seller', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getFutureTransfers(marketplace,sellerId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
});
