/* eslint-disable functional/no-throw-statement */
import qs from 'qs';

import { IDelete, IQuery, IResponse, ISearch } from '../common';
import { IMarketplace, IMcc } from '../marketplace';

import { IBusiness, IDocument, ISeller } from './interfaces';
import { businessScheme, sellerScheme } from './validations';

/**
 * Get Seller Individuals | Business
 */
export const getSeller = (marketplace: IMarketplace, sellerId: string) => {
  return marketplace.get<ISeller | IBusiness>(`/sellers/${sellerId}`);
};
/**
 * Search Seller Individuals | Business
 */
export const searchSeller = (marketplace: IMarketplace, query?: ISearch) => {
  if (!query) throw new Error('query is not valid');
  const queryString = qs.stringify(query);
  return marketplace.get<ISeller | IBusiness>(`/sellers/search?${queryString}`);
};
/**
 * Get Seller Individuals | Business
 */
export const getSellers = (marketplace: IMarketplace, query?: IQuery) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<ISeller | IBusiness>>(
    `/sellers?${queryString}`
  );
};
/**
 * Delete Seller Individuals | Business
 */
export const deleteSeller = (marketplace: IMarketplace, sellerId: string) => {
  return marketplace.delete<IDelete>(`/sellers/${sellerId}`);
};
/**
 * Get Seller Individuals | Business
 */
export const getDocuments = (
  marketplace: IMarketplace,
  sellerId: string,
  query?: IQuery
) => {
  const queryString = qs.stringify(query);
  return marketplace.get<IResponse<IDocument>>(
    `/sellers/${sellerId}/documents?${queryString}`
  );
};
/**
 * Download Seller Document
 */
export const downloadDocument = (
  marketplace: IMarketplace,
  documentId: string
) => {
  return marketplace.get<readonly string[]>(`/documents/${documentId}/file`);
};
//TODO: Create uploadDocument
/**
 * Upload Seller Document
 */
// export const uploadDocument = (
//   marketplace: IMarketplace,
//   query: IQueryDocument
// ) => {
//   throw new Error('Not implemented');
// };

/**
 * Create Seller Individual
 */
export const createIndividual = (marketplace: IMarketplace, body: ISeller) => {
  sellerScheme.validateSync(body);
  return marketplace.post<ISeller, ISeller>(`/sellers/individuals`, body);
};

/**
 * Update Seller Individual
 */
export const updateIndividual = (
  marketplace: IMarketplace,
  seller_id: string,
  body: ISeller
) => {
  sellerScheme.validateSync(body);
  return marketplace.put<ISeller, ISeller>(
    `/sellers/individuals/${seller_id}`,
    body
  );
};

/**
 * Create Seller Business
 */
export const createBusiness = (marketplace: IMarketplace, body: IBusiness) => {
  businessScheme.validateSync(body);
  return marketplace.post<IBusiness, IBusiness>(`/sellers/businesses`, body);
};
/**
 * Update Seller Business
 */
export const updateBusiness = (
  marketplace: IMarketplace,
  seller_id: string,
  body: IBusiness
) => {
  businessScheme.validateSync(body);
  return marketplace.put<IBusiness, IBusiness>(
    `/sellers/businesses/${seller_id}`,
    body
  );
};

/**
 * Get McCodes
 */
export const getMcCodes = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<IMcc>>(`/merchant_category_codes`, {
    absolute: true,
  });
};
