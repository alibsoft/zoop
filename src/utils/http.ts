/* eslint-disable functional/no-return-void */
import { IOptions } from '../marketplace';

export const buildURL = (url: string, uri: string, options?: IOptions) => {
  // Check version API
  const version =
    options?.version != undefined && options.version > 0
      ? `/v${options.version}`
      : '/v1';
  return !options?.absolute ? `${version}${url}${uri}` : `${version}${uri}`;
};

export const reqLog = (request: any) =>
  console.log(
    'Starting Request',
    JSON.stringify(
      {
        method: request.method,
        params: request.params,
        url: request.url,
        data: request.data,
      },
      null,
      2
    )
  );
export const resLog = (response: any) =>
  console.log(
    'Starting Response:',
    JSON.stringify(
      {
        status: response.status,
        message: response.statusText,
        data: response.data,
      },
      null,
      2
    )
  );
