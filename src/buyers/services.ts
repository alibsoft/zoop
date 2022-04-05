import qs from 'qs';

import { IDelete, IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import { ISearchBuyer } from './interfaces';
import { IBuyer } from './interfaces';
import { buyerScheme } from './validations';
/**
 * Get Buyer
 */
export const getBuyer = (marketplace: IMarketplace, buyerId: string) => {
  return marketplace.get<IBuyer>(`/buyers/${buyerId}`);
};
/**
 * Get All Buyers
 */
export const getBuyers = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IBuyer>>(`/buyers?${queryString}`);
};
/**
 * Delete Buyer
 */
export const deleteBuyer = (marketplace: IMarketplace, buyerId: string) => {
  return marketplace.delete<IDelete>(`/buyers/${buyerId}`);
};
/**
 * Search Seller Individuals | Business
 */
export const searchBuyer = (
  marketplace: IMarketplace,
  query?: ISearchBuyer
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IBuyer>(`/buyers/search?${queryString}`);
};
/**
 * Create Buyer
 */
export const createBuyer = (marketplace: IMarketplace, body: IBuyer) => {
  buyerScheme.validateSync(body);
  return marketplace.post<IBuyer, IBuyer>(`/buyers`, body);
};
/**
 * Update Buyer
 */
export const updateBuyer = (
  marketplace: IMarketplace,
  buyer_id: string,
  body: IBuyer
) => {
  buyerScheme.validateSync(body);
  return marketplace.put<IBuyer, IBuyer>(`/buyers/${buyer_id}`, body);
};
