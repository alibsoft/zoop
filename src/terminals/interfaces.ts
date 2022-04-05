import { IEnty } from '../common';

export interface ITerminal extends IEnty {
  readonly code?: string;
  readonly serial_number?: string;
  readonly terminal_model?: string;
  readonly manufacturer?: string;
  readonly customer?: string;
  readonly pin_capability?: string;
  readonly contactless_enabled?: boolean;
  readonly application_version?: string;
  readonly emv_lib_version?: string;
  readonly firmware_version?: string;
  readonly hardware_version?: string;
  readonly specification_version?: string;
  readonly metadata?: string;
}
