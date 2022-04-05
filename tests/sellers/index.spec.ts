/* eslint-disable functional/no-return-void */
import { IQuery, ISearch, SortType } from '../../src/common';
import {
  createBusiness,
  createIndividual,
  deleteSeller,
  downloadDocument,
  getDocuments,
  getMcCodes,
  getSeller,
  getSellers,
  searchSeller,
  updateBusiness,
  updateIndividual,
} from '../../src/sellers';
import { business, marketplace, seller } from '../index';

/**
 * Sellers Tests API
 */
describe('Vendedores', () => {
  /**
   * Criar novo vendedor do tipo indivíduo
   */
  test('Criar novo vendedor do tipo indivíduo', async () => {
    const response = await createIndividual(marketplace, seller);
    const data = response.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Alterar vendedor do tipo indivíduo
   */
  test('Alterar vendedor do tipo indivíduo', async () => {
    const sellerId = '51e9822d1ab74ad0a621d211b8392022';
    const first_name = 'Carlos';
    const newSeller = { ...seller, first_name };
    const response = await updateIndividual(marketplace, sellerId, newSeller);
    const data = response.data;
    expect(data.first_name).toBe(first_name);
  });
  /**
   * Criar novo vendedor do tipo empresa
   */
  test('Criar novo vendedor do tipo empresa', async () => {
    const response = await createBusiness(marketplace, business);
    const data = response.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Alterar vendedor do tipo empresa
   */
  test('Alterar vendedor do tipo empresa', async () => {
    const sellerId = '46990bbbad354d5796b82b21fa6665cb';
    const business_name = 'Saitama';
    const newSeller = { ...business, business_name };
    const response = await updateBusiness(marketplace, sellerId, newSeller);
    const data = response.data;
    expect(data.business_name).toBe(business_name);
  });

  /**
   * Enviar documento de cadastro de vendedor
   */
  //TODO: Adicionar teste uploadDocument
  // test('Upload Seller Document', async () => {
  //   try {
  //     const query?: IQueryDocument = {
  //       file: 'test',
  //       category: 'test',
  //       metadata: 'test',
  //       description: 'test description',
  //     };
  //     const response = await uploadDocument(marketplace, query);
  //     // const data = response.data;
  //     expect(response).not.toBeNull();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  /**
   * Listar documentos de um vendedor
   */
  test('Listar documentos de um vendedor', async () => {
    const query: IQuery = {
      limit: 10,
      offset: 0,
      sort: SortType.ASC,
      date_range: new Date().getTime(),
    };
    const sellerId = '46990bbbad354d5796b82b21fa6665cb';
    const response = await getDocuments(marketplace, sellerId, query);
    const data = response.data;
    expect(data.total).toBe(0); // Verificar quando enviar documentos
  });
  /**
   * Download documentos de um vendedor por ID
   */
  test('Download documentos de um vendedor por ID', async () => {
    try {
      const documentId = '...';
      const response = await downloadDocument(marketplace, documentId);
      const data = response.data;
      expect(data.length).toBeGreaterThan(0);
    } catch (error) {
      console.log(error);
    }
  });
  /**
   * Recuperar detalhes de vendedor por ID.
   */
  test('Recuperar detalhes de vendedor por ID', async () => {
    const sellerId = '46990bbbad354d5796b82b21fa6665cb';
    const response = await getSeller(marketplace, sellerId);
    const data = response.data;
    expect(data).not.toBeNull();
  });
  /**
   * Deletar vendedor por ID
   */
  test('Deletar vendedor por ID', async () => {
    const sellerId = '46990bbbad354d5796b82b21fa6665cb';
    const response = await deleteSeller(marketplace, sellerId);
    const data = response.data;
    expect(data).not.toBeNull();
  });
  /**
   * Listar vendedores
   */
  test('Listar vendedores', async () => {
    const query: IQuery = {
      limit: 10,
      offset: 0,
      sort: SortType.ASC,
    };
    const response = await getSellers(marketplace, query);
    const data = response.data;
    expect(data.total).toBeGreaterThan(0);
  });
  /**
   * Buscar vendedor por CPF/CNPJ
   */
  test('Buscar vendedor por CPF/CNPJ', async () => {
    const query: ISearch = {
      ein: '26715503000137',
      taxpayer_id: '65141717968',
    };
    const response = await searchSeller(marketplace, query);
    const data = response.data;
    expect(data.id).not.toBeNull();
  });
});
/**
 * Listar MCCs (Merchant Category Codes)
 */
test('Listar MCCs (Merchant Category Codes)', async () => {
  const res = await getMcCodes(marketplace);
  const data = res.data;
  expect(data.total).toBeGreaterThan(0);
});
