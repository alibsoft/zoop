import { IEnty, PaymentType } from '../common';

export interface ISubscription extends IEnty {
  readonly uuid?: string;
  readonly plan?: string;
  readonly on_behalf_of?: string;
  readonly customer?: string;
  readonly description?: string;
  readonly payment_method?: PaymentType;
  readonly due_date?: Date;
  readonly due_since_date?: Date;
  readonly expiration_date?: Date;
  readonly amount?: number;
  readonly currency?: string;
  readonly suspended_at?: Date;
  readonly uri?: string;
}
