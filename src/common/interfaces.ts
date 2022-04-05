/**
 * Message Interface
 */
export interface IMessage {
  readonly message?: string;
}
/**
 * Entity Interface
 */
export interface IEnty {
  readonly id?: string;
  readonly status?: string;
  readonly resource?: string;
  readonly type?: string;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}
/**
 * Address Interface
 */
export interface IAddress {
  readonly line1: string;
  readonly line2: string;
  readonly line3?: string;
  readonly neighborhood?: string;
  readonly city?: string;
  readonly state?: string;
  readonly postal_code?: string;
  readonly country_code?: string;
}
export interface ISocial {
  readonly website?: string;
  readonly facebook?: string;
  readonly twitter?: string;
}
export interface IProfile {
  readonly first_name?: string;
  readonly last_name?: string;
}
/**
 * Person Interface
 */
export interface IPerson extends IOwner, ISocial {
  readonly address?: IAddress;
}
/**
 * Owner Interface
 */
export interface IOwner extends IProfile {
  readonly birthdate?: string;
  readonly email?: string;
  readonly phone_number?: string;
  readonly taxpayer_id?: string;
}
/**
 * Metadata Interface
 */
export declare type IMetadata = {
  readonly [K in string]?: string;
};
/**
 * Response Interface
 */
export interface IResponse<Type> {
  readonly has_more?: boolean;
  readonly items?: readonly Type[];
  readonly limit?: number;
  readonly offset?: number;
  readonly page?: number;
  readonly resource?: string;
  readonly total?: number;
  readonly total_pages?: number;
  readonly uri?: string;
}
/**
 * Detele Interface
 */
export interface IDelete extends IEnty {
  readonly deleted?: boolean;
}
/**
 * Search Interface
 */
export interface ISearch {
  readonly taxpayer_id?: string;
  readonly ein?: string;
}
/**
 * IQuey Interface
 */
export interface IQuery {
  readonly sort?: SortType;
  readonly limit?: number;
  readonly offset?: number;
  readonly date_range?: number;
  readonly 'date_range[gt]'?: number;
  readonly 'date_range[gte]'?: number;
  readonly 'date_range[lt]'?: number;
  readonly 'date_range[lte]'?: number;
}
export enum SortType {
  ASC = 'time-ascending',
  DSC = 'time-descending',
}
export enum FrenquencyType {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  ANNUALLY = 'annually',
}
export enum PaymentType {
  PIX = 'pix',
  BOLETO = 'boleto',
  CREDIT = 'credit',
}
