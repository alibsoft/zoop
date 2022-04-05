import { IDelete } from '../common';
import { IMarketplace } from '../marketplace';

import { ICard, ICardToken } from './interfaces';
import { cardScheme } from './validations';

/**
 * Criar novo token de cartão
 */
export const createCardToken = (marketplace: IMarketplace, body: ICard) => {
  cardScheme.validateSync(body);
  return marketplace.post<ICardToken, ICard>(`/cards/tokens`, body);
};
/**
 * Remover cartão pelo identificador
 */
export const getCard = (marketplace: IMarketplace, cardId: string) => {
  return marketplace.get<IDelete>(`/cards/${cardId}`);
};
/**
 * Remover cartão pelo identificador
 */
export const deleteCard = (marketplace: IMarketplace, cardId: string) => {
  return marketplace.delete<IDelete>(`/cards/${cardId}`);
};
/**
 * Associar cartão com comprador
 */
export const attchCard = (
  marketplace: IMarketplace,
  customer: string,
  token: string
) => {
  return marketplace.post<ICardToken, unknown>(`/cards`, {
    customer,
    token,
  });
};
