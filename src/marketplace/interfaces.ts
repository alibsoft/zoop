/* eslint-disable functional/no-method-signature */
import { AxiosBasicCredentials, AxiosResponse } from 'axios';

/**
 * Request Config
 */
export interface IRequestConfig {
  readonly baseURL: string;
  readonly auth: AxiosBasicCredentials;
  readonly timeout?: number;
  readonly validateStatus?: ((status: number) => boolean) | null;
}

/**
 * Request Options
 */
export interface IOptions {
  readonly absolute?: boolean;
  readonly version?: number;
}
/**
 * Merchant Category Codes Interface
 */
export interface IMcc {
  readonly category: string;
  readonly code: string;
  readonly description: string;
  readonly id: string;
  readonly resource: string;
}
/**
 * Markteplace Interface Config
 */
export interface IConfig {
  readonly marketplaceId: string;
  readonly publishableKey: string;
  readonly baseURL?: string;
  readonly sandbox?: boolean;
  readonly requestTimeout?: number;
}
/**
 * Markteplace Interface
 */
export interface IMarketplace {
  readonly isSandbox: boolean;
  /**
   * Post
   */
  getId(): string;
  /**
   * Post
   */
  post<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>>;
  /**
   * Get
   */
  get<TResponse>(
    uri: string,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>>;
  /**
   * Delete
   */
  delete<TResponse>(
    uri: string,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>>;
  /**
   * Put
   */
  put<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>>;
  /**
   * Patch
   */
  patch<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>>;
}
