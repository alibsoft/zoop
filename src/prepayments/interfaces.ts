import { IEnty, IQuery } from '../common';
/**
 * PrePayment Query Interface
 */
export interface IPrePaymentQuery extends IQuery {
  readonly 'expected_on_range[gt]'?: string;
  readonly 'expected_on_range[gte]'?: string;
  readonly 'expected_on_range[lt]'?: string;
  readonly 'expected_on_range[lte]'?: string;
  readonly created_at_range?: string;
}
/**
 * PrePayment Interface
 */
export interface IPrePayment extends IEnty {
  readonly customer?: string;
  readonly prepayment_date?: Date;
  readonly status_detail?: string;
  readonly prepayment_gross_amount?: number;
  readonly prepayment_net_amount?: number;
  readonly receivables_count?: number;
  readonly zoop_fee?: number;
  readonly partner_fee?: number;
  readonly auto_commit?: boolean;
  readonly min_transaction_date?: Date;
  readonly max_transaction_date?: Date;
  readonly min_expected_date?: Date;
  readonly max_expected_date?: Date;
  readonly receivables?: readonly string[];
  readonly transactions?: readonly string[];
  readonly target_amount?: number;
  readonly margin: number;
  readonly order: string;
  readonly entry_modes: readonly string[];
  readonly fail_on_receivable_invalid: boolean;
}
/**
 * PrePayment Future Interface
 */
export interface IFuturePrePayment {
  readonly customer?: string;
  readonly receivables_count?: number;
  readonly total_gross_amount?: number;
  readonly total_net_amount_before_prepayment_fees?: number;
  readonly total_net_amount_after_prepayment_fees?: number;
}
