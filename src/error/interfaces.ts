/**
 * Error Interface
 */
export interface IErrorResponse {
  readonly error?: Error;
}
export interface IError {
  readonly status?: string;
  readonly status_code?: number;
  readonly type?: string;
  readonly category?: string;
  readonly message?: string;
}
