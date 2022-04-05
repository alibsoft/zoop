import qs from 'qs';

import { IQuery } from '../common';
import { IMarketplace } from '../marketplace';

/**
 * Listar eventos por marketplace
 */
export const getEvents = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get(`/events?${queryString}`);
};
/**
 * Redisparo de eventos
 */
export const replayEvents = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get(`/events/actions/replay?${queryString}`);
};
/**
 * Redisparo de eventos
 */
export const replayEvent = (marketplace: IMarketplace, eventId: string) => {
  return marketplace.get(`/events/${eventId}/actions/replay`);
};
