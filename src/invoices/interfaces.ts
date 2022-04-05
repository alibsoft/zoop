import { IEnty, IMetadata, PaymentType } from '../common';
import { ICurrency } from '../transactions';

export interface IInvoice extends ICurrency, IEnty {
  readonly subscription?: string;
  readonly on_behalf_of?: string;
  readonly customer?: string;
  readonly invoice_customer?: any;
  readonly description?: string;
  readonly payment_methods?: PaymentType;
  readonly due_date?: Date;
  readonly paid_at?: Date;
  readonly voided_at: Date;
  readonly expiration_date?: string;
  readonly retries?: number;
  readonly max_retries?: number;
  readonly metadata?: IMetadata;
  readonly uri?: string;
}
