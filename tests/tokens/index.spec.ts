/* eslint-disable functional/no-return-void */

import {
  attchCard,
  createCardToken,
  deleteCard,
  getCard,
} from '../../src/tokens';
import { cardOne, marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Token and Cards Test', () => {
  /**
   * Criar novo token de cartão
   */
  test('Criar novo token de cartão', async () => {
    try {
      const res = await createCardToken(marketplace, cardOne);
      const data = res.data;
      expect(data.id).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
  /**
   * Associar cartão com comprador
   */
  test('Associar cartão com comprador', async () => {
    try {
      const token = 'fdc1160633e649a5937d579309098efd';
      const customer = '2c856c75555c48b0ae6050cd76797fcd';
      const res = await attchCard(marketplace, customer, token);
      const data = res.data;
      expect(data.id).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });

  /**
   * Listar detalhes de cartão pelo identificador
   */
  test('Listar detalhes de cartão pelo identificador', async () => {
    try {
      const cardId = 'aa11c52a370647e6bf42789567ab6840';
      const res = await getCard(marketplace, cardId);
      const data = res.data;
      expect(data.id).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
  /**
   * Remover cartão pelo identificador
   */
  test('Remover cartão pelo identificador', async () => {
    try {
      const cardId = 'aa11c52a370647e6bf42789567ab6840';
      const res = await deleteCard(marketplace, cardId);
      const data = res.data;
      expect(data.id).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
});
