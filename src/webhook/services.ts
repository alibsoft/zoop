import { IMarketplace } from '../marketplace';

import { IWebHooks } from './interfaces';

/**
 * Criar webhook por marketplace
 */
export const createWebHooks = (marketplace: IMarketplace, body: IWebHooks) => {
  return marketplace.post(`/webhooks`, body);
};
/**
 * Listar webhooks por marketplace
 */
export const getWebHooks = (marketplace: IMarketplace) => {
  return marketplace.get(`/webhooks`);
};
/**
 * Recuperar detalhes de webhook
 */
export const getWebHook = (marketplace: IMarketplace, webhookId: string) => {
  return marketplace.get(`/webhooks/${webhookId}`);
};

/**
 * Remover webhook
 */
export const deleteWebHooks = (
  marketplace: IMarketplace,
  webhookId: string
) => {
  return marketplace.delete(`/webhooks/${webhookId}`);
};
