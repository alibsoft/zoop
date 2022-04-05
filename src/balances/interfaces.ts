import { IQuery } from '../common';
import { IHistory } from '../transactions';
/**
 * Balance Query Interface
 */
export interface IBalanceQuery extends IQuery {
  readonly 'created_date_range[gte]': string;
  readonly 'created_date_range[lte]': string;
}
export interface IBalance {
  readonly current_balance: string;
  readonly current_blocked_balance: string;
  readonly account_balance: string;
}

export interface IHistoryBalance {
  readonly currentBalance?: string;
  readonly currentBlockedBalance?: string;
  readonly items?: readonly IHistoryBalanceItem[];
}

export interface IHistoryBalanceItem {
  readonly id?: string;
  readonly resource?: string;
  readonly nsu?: string;
  readonly amount?: string;
  readonly blocked_amount?: string;
  readonly gross_amount?: string;
  readonly fee?: string;
  readonly date?: Date;
  readonly description?: string;
  readonly current_balance?: string;
  readonly current_blocked_balance?: string;
  readonly type?: string;
  readonly object_id?: string;
  readonly object_type?: string;
  readonly transaction?: IHistory;
}
export interface Transaction {
  readonly id?: string;
  readonly authorization_code?: string;
}
