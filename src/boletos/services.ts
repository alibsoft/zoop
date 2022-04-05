import { IMessage } from '../common';
import { IMarketplace } from '../marketplace';

import { IBoleto } from './interfaces';
/**
 * Enviar cobrança de boleto por email
 */
export const sendBoletoByEmail = (
  marketplace: IMarketplace,
  boletoId: string
) => {
  return marketplace.post<IMessage, unknown>(`/boletos/${boletoId}/emails`, {});
};
/**
 * Listar detalhes de boleto
 */
export const getBoleto = (marketplace: IMarketplace, boletoId: string) => {
  return marketplace.get<IBoleto>(`/boletos/${boletoId}`);
};
