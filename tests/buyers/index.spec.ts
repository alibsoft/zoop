/* eslint-disable functional/no-return-void */
import {
  createBuyer,
  deleteBuyer,
  getBuyer,
  getBuyers,
  IBuyer,
  ISearchBuyer,
  searchBuyer,
  updateBuyer,
} from '../../src/buyers';
import { IQuery, SortType } from '../../src/common';
import { buyer, marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Buyer Test', () => {
  /**
   * Criar comprador
   */
  test('Criar comprador', async () => {
    const res = await createBuyer(marketplace, buyer);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });

  /**
   * Listar compradores
   */
  test('Listar compradores', async () => {
    const query: IQuery = {
      limit: 10,
      offset: 0,
      sort: SortType.ASC,
    };
    const res = await getBuyers(marketplace, query);
    const data = res.data;
    expect(data.total).toBeGreaterThan(0);
  });
  /**
   * Alterar comprador
   */
  test('Alterar comprador', async () => {
    const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
    const first_name = 'Mariana';
    const newBuyer: IBuyer = {
      ...buyer,
      first_name,
      phone_number: '+5584996597026',
      email: 'peegle.io@gmail.com',
      twitter: 'http://twitter',
    };
    const res = await updateBuyer(marketplace, buyerId, newBuyer);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Recuperar detalhes de comprador por ID
   */
  test('Recuperar detalhes de comprador por ID', async () => {
    const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
    const res = await getBuyer(marketplace, buyerId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Remover comprador por ID
   */
  test('Remover comprador por ID', async () => {
    const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
    const res = await deleteBuyer(marketplace, buyerId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Buscar comprador por CPF/CNPJ
   */
  test('Buscar comprador por CPF/CNPJ', async () => {
    const query: ISearchBuyer = { taxpayer_id: '22342178492' };
    const res = await searchBuyer(marketplace, query);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
});
