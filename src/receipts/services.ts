import { IMarketplace } from '../marketplace';

/**
 * Enviar recibo por E-mail
 */
export const sendReceiptByEmail = (
  marketplace: IMarketplace,
  receiptId: string,
  email: string
) => {
  return marketplace.post(`/receipts/${receiptId}/emails`, { to: email });
};
/**
 * Enviar recibo por SMS
 */
export const sendReceiptBySMS = (
  marketplace: IMarketplace,
  receiptId: string,
  phone: string //TODO: validate phone
) => {
  return marketplace.post(`/receipts/${receiptId}/texts`, { to: phone });
};
/**
 * Enviar recibo por SMS e E-mail
 */
export const sendReceipt = (marketplace: IMarketplace, receiptId: string) => {
  return marketplace.post(`/receipts/${receiptId}/send`, {});
};

/**
 * Alterar detalhes do recibo
 */
export const getReceipt = (marketplace: IMarketplace, receiptId: string) => {
  return marketplace.get(`/receipts/${receiptId}`, {});
};
/**
 * Listar detalhes do recibo
 */
export const updateReceipt = (marketplace: IMarketplace, receiptId: string) => {
  return marketplace.get(`/receipts/${receiptId}`, {});
};

/**
 * Listar detalhes do recibo
 */
export const renderHtmlReceipt = (
  marketplace: IMarketplace,
  receiptId: string
) => {
  return marketplace.get(`/receipts/${marketplace.getId()}/${receiptId}/`, {});
};
