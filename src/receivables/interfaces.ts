import { IEnty, IQuery } from '../common';
/**
 * Receivable Interface
 */
export interface IReceivable extends IEnty {
  readonly recipient?: string;
  readonly transaction?: string;
  readonly split_rule?: any;
  readonly installment?: string;
  readonly liable?: boolean;
  readonly amount?: string;
  readonly gross_amount?: string;
  readonly anticipation_fee?: string;
  readonly paid_at?: string;
  readonly transaction_created_at?: string;
  readonly canceled_at?: string;
  readonly expected_on?: string;
  readonly authorization_code?: string;
  readonly id_original_receivable?: string;
  readonly prepaid?: boolean;
}
/**
 * Receivable Query Interface
 */
export interface IReceivableQuery extends IQuery {
  readonly page: number;
  readonly status: string;
  readonly 'paid_at_range[gte]': number;
  readonly 'paid_at_range[lte]': number;
  readonly 'expected_on_range[gte]': number;
  readonly 'expected_on_range[lte]': number;
}
