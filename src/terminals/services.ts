import { IMarketplace } from '../marketplace';

import { ITerminal } from '.';
/**
 * Parear terminal POS
 */
export const pairingTerminal = (
  marketplace: IMarketplace,
  token: string,
  isStaging: boolean
) => {
  return marketplace.post(`/terminals/pairing`, { token, isStaging });
};
/**
 * Buscar informações sobre terminal
 */
export const getTerminal = (marketplace: IMarketplace, terminalId: string) => {
  return marketplace.get<ITerminal>(`/card-present/terminals/${terminalId}`, {
    absolute: true,
  });
};
