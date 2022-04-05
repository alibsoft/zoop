import { FrenquencyType, IQuery } from '../common';

export enum TransferStatus {
  CREATED = 'created',
  CONFIRMED = 'confirmed',
  SUCCEEDED = 'successded',
  PENDING = 'pending',
  FAILED = 'failed',
}
export interface ITransferQuery extends IQuery {
  //Retorna transferência onde o status for igual o informado.
  readonly status?: TransferStatus;
}
export interface IFutureTransferQuery {
  readonly 'expected_on_range[gt]': string;
  readonly 'expected_on_range[gte]': string;
  readonly 'expected_on_range[lt]': string;
  readonly 'expected_on_range[lte]': string;
  readonly 'created_at_range[gt]': string;
  readonly 'created_at_range[gte]': string;
  readonly 'created_at_range[lt]': string;
  readonly 'created_at_range[lte]': string;
}

export interface IReceivingPolicy {
  readonly transfer_interval: FrenquencyType;
  readonly transfer_day: number;
  readonly transfer_enabled: boolean;
  readonly minimum_transfer_value: number;
}
