/* eslint-disable functional/no-return-void */

import { ISplitRecipientPercentage } from '../../src/split';
import {
  approveTransaction,
  cancelledLetterTransaction,
  captureTransaction,
  chargebackTransaction,
  createBoletoTransaction,
  createCardTokenTransaction,
  createCustomerTransaction,
  createDirectTransaction,
  createPixTransaction,
  getTransaction,
  getTransactions,
  getTransactionsBySeller,
  IBoletoTransaction,
  ICardTokenTransaction,
  ICustomerTransaction,
  IDirectTransaction,
  IPixTransaction,
} from '../../src/transactions';
import { marketplace } from '../index';

/**
 * Marketplace Tests API
 */
describe('Transactions Split Test', () => {
  /**
   * Criar transação por pix com split
   * TODO: Pendente ativação
   */
  test('Criar transação por pix com split', async () => {
    const transaction: IPixTransaction = {
      on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
      amount: 1000,
    };
    const res = await createPixTransaction(marketplace, transaction);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Criar transação por boleto simples  e split
   */
  test('Criar transação por boleto simples e split', async () => {
    const splitRule: ISplitRecipientPercentage = {
      recipient: '51e9822d1ab74ad0a621d211b8392022',
      percentage: 50,
      liable: true,
      charge_processing_fee: '0',
      charge_recipient_processing_fee: '1',
    };
    const transaction: IBoletoTransaction = {
      on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
      customer: '2c856c75555c48b0ae6050cd76797fcd',
      amount: 23880,
      reference_id: 'Venda com Split de Pagamento',
      split_rules: [splitRule],
    };
    const res = await createBoletoTransaction(marketplace, transaction);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Criar transação por card token com split
   */
  test('Criar transação por card token com split', async () => {
    const transaction: ICardTokenTransaction = {
      on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
      reference_id: '0142',
      installment_plan: {
        number_installments: 1,
      },
      source: {
        amount: 140000,
        card: {
          id: 'da99c7124e2c446c86c8234ef8bcad26',
        },
      },
    };
    const res = await createCardTokenTransaction(marketplace, transaction);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Criar transação por autorizacao direta com split
   */
  test('Criar transação por autorizacao direta com split', async () => {
    const transaction: IDirectTransaction = {
      on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
      reference_id: '0142',
      installment_plan: {
        number_installments: 1,
      },
      source: {
        amount: 12500,
        card: {
          holder_name: 'Maria Silva',
          card_number: '5138692036125449',
          expiration_month: '01',
          expiration_year: '2028',
          security_code: '123',
        },
      },
    };
    const res = await createDirectTransaction(marketplace, transaction);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Criar transação por customer Id com split
   */
  test('Criar transação por customer com split', async () => {
    const splitRule: ISplitRecipientPercentage = {
      recipient: '51e9822d1ab74ad0a621d211b8392022',
      percentage: 50,
      liable: true,
      charge_processing_fee: '0',
      charge_recipient_processing_fee: '1',
    };
    const transaction: ICustomerTransaction = {
      on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
      reference_id: '0142',
      amount: 23880,
      installment_plan: {
        number_installments: 12,
      },
      statement_descriptor: 'OkaPlay',
      customer: '2c856c75555c48b0ae6050cd76797fcd',
      split_rules: [splitRule],
    };
    const res = await createCustomerTransaction(marketplace, transaction);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });

  /**
   * Listar detalhes de transação pelo identificador com split
   */
  test('Listar detalhes de transação pelo identificador com split', async () => {
    const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
    const res = await getTransaction(marketplace, transactionId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * LListar transações do marketplace com split
   */
  test('Listar transações do marketplace com split', async () => {
    const res = await getTransactions(marketplace);
    const data = res.data;
    expect(data.uri).not.toBeNull();
  }, 10000);
  /**
   * Listar transações por vendedor com split
   */
  test('Listar transações por vendedor com split', async () => {
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const res = await getTransactionsBySeller(marketplace, sellerId);
    const data = res.data;
    expect(data.items).not.toBeNull();
  });
  /**
   * Disponibilizar link carta de cancelamento com split
   * TODO: API não está funcionando
   * Error: endpoint_not_found
   */
  test('Disponibilizar link carta de cancelamento com split', async () => {
    const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
    const res = await cancelledLetterTransaction(marketplace, transactionId);
    const data = res.data;
    expect(data.url).not.toBeNull();
  });
  /**
   * Estornar transação cartão não presente com split
   */
  test('Estornar transação cartão não presente com split', async () => {
    const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const amount = 1000000;
    const res = await chargebackTransaction(
      marketplace,
      transactionId,
      sellerId,
      amount
    );
    const data = res.data;
    expect(data.refunded).not.toBeNull();
  });
  /**
   * Capturar transação cartão não presente com split
   */
  test('Capturar transação cartão não presente com split', async () => {
    const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
    const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
    const amount = 10000;
    const res = await captureTransaction(
      marketplace,
      transactionId,
      sellerId,
      amount
    );
    const data = res.data;
    expect(data.refunded).not.toBeNull();
  });
  /**
   * Aprovar transação boleto simples com split
   */
  test('Aprovar transação boleto com split', async () => {
    const transactionId = '87ce68326fee4d1fb85174c3657726a7';
    const res = await approveTransaction(marketplace, transactionId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
});
