/* eslint-disable functional/no-return-void */
import { cancelAjustment, createAjustment, createAjustmentOwner, getAjustment, getAjustments, IAjustment } from '../../src/adjustments';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Ajustments Test', () => {
  /**
   * Criar ajuste de cobrança informando pagador e recebedor
   */
  test('Criar ajuste de cobrança informando pagador e recebedor', async () => {
    const ownerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const receiverId = 'c6809a3b93ec47cb98afc80a010b3792';
    const body: IAjustment = {
        amount: 10000,
        description: "Cobrança de Mensalidade",
        transfer_date: new Date()
    }
    const res = await createAjustment(marketplace,ownerId,receiverId, body);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Criar ajuste de cobrança informando somente pagador
   */
  test('Criar ajuste de cobrança informando somente pagador', async () => {
    const ownerId = '51e9822d1ab74ad0a621d211b8392022';
    const body: IAjustment = {
        amount: 10000,
        description: "Cobrança de Mensalidade",
        transfer_date: new Date()
    }
    const res = await createAjustmentOwner(marketplace, ownerId, body);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar ajustes de cobrança por marketplace
   */
  test('Listar ajustes de cobrança por marketplace', async () => {
    const res = await getAjustments(marketplace);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Recuperar detalhes de ajuste de cobrança
   */
   test('Recuperar detalhes de ajuste de cobrança', async () => {
    const ajustmentId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getAjustment(marketplace,ajustmentId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar transações associadas a transferência
   */
   test('Cancelar ajuste de cobrança agendado anteriormente à data prevista para efetivação', async () => {
    const ajustmentId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await cancelAjustment(marketplace,ajustmentId);
    const data = res.data;
    expect(data).not.toBeNull();
  });
});
