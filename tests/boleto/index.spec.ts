/* eslint-disable functional/no-return-void */

import { marketplace } from '..';
import { getBoleto, sendBoletoByEmail } from '../../src/boletos';

/**
 * Marketplace Tests API
 */
describe('Boleto Test', () => {
  /**
   * Listar detalhes de boleto
   */
  test('Listar detalhes de boleto', async () => {
    const boletoId = 'bce4d1d340364deb9d97b25b7d65241b';
    const res = await getBoleto(marketplace, boletoId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Enviar cobrança de boleto por email
   */
  test('Enviar cobrança de boleto por email', async () => {
    const boletoId = 'bce4d1d340364deb9d97b25b7d65241b';
    const res = await sendBoletoByEmail(marketplace, boletoId);
    const data = res.data;
    expect(data).not.toBeNull();
  }, 10000);
});
