/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import Axios, { AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

import { buildURL, reqLog, resLog } from '../utils';

import { IConfig, IMarketplace, IOptions, IRequestConfig } from './interfaces';

/**
 * Retry Request
 */
axiosRetry(Axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
Axios.interceptors.request.use(
  (request) => {
    reqLog(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 400) resLog(response);
    return response.status >= 200 && response.status < 400
      ? response
      : Promise.reject(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const BaseURL = 'https://api.zoop.ws';
/**
 * Marketplace Class
 */
export class Marketplace implements IMarketplace {
  /**
   * Attributes
   */
  private static __instance: IMarketplace;
  private readonly url: string;
  private readonly requestConfig: IRequestConfig;

  /**
   * Constructor
   */
  constructor(readonly config: IConfig) {
    const { requestTimeout, baseURL, marketplaceId, publishableKey } = config;
    this.isSandbox = config.sandbox || false;
    this.url = `/marketplaces/${marketplaceId}`;
    this.requestConfig = {
      validateStatus: () => true,
      timeout: requestTimeout || 30000,
      baseURL: baseURL || BaseURL,
      auth: {
        username: publishableKey,
        password: '',
      },
    };
  }
  /**
   * Sandbox
   */
  isSandbox: boolean;
  /**
   * Post
   */
  getId = () => this.config.marketplaceId;
  /**
   * Post
   */
  post<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>> {
    const url = buildURL(this.url, uri, options);
    return Axios.post(url, body, {
      ...this.requestConfig,
    });
  }
  /**
   * Get
   */
  get<TResponse>(
    uri: string,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>> {
    const url = buildURL(this.url, uri, options);
    return Axios.get(url, {
      ...this.requestConfig,
    });
  }
  /**
   * Delete
   */
  delete<TResponse>(
    uri: string,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>> {
    const url = buildURL(this.url, uri, options);
    return Axios.delete(url, {
      ...this.requestConfig,
    });
  }
  /**
   * Put
   */
  put<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>> {
    const url = buildURL(this.url, uri, options);
    return Axios.put(url, body, {
      ...this.requestConfig,
    });
  }
  /**
   * Patch
   */
  patch<TResponse, TBody>(
    uri: string,
    body: TBody,
    options?: IOptions
  ): Promise<AxiosResponse<TResponse, unknown>> {
    const url = buildURL(this.url, uri, options);
    return Axios.patch(url, body, {
      ...this.requestConfig,
    });
  }
  /**
   * Singleton Instance of Marketplace
   */
  public static instance(config: IConfig): IMarketplace {
    if (!Marketplace.__instance) {
      Marketplace.__instance = new Marketplace(config);
    }
    return Marketplace.__instance;
  }
}
