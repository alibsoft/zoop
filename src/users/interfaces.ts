import { IEnty, IProfile } from '../common';

/**
 * Credentials Interface
 */
export interface ICredentials {
  readonly username?: string;
  readonly password?: string;
}
export interface IUser extends ICredentials, IProfile, IEnty {
  readonly token?: string;
  readonly permissions?: readonly IPermissions[];
  readonly profile?: IAccessType;
}
/**
 * Profile Interface
 */
export interface IAccessType {
  readonly dashboard_layout?: string;
}
export enum PermissionType {
  ADMIN = 'full_access_admin',
  VISUALIZATION = 'full_visualization',
  OPERATION = 'full_access_operation',
  CONFIGURATION = 'full_access_configuration',
  CUSTOMERS = 'customers',
}
/**
 * Permissions Interface
 */
export interface IPermissions {
  readonly type?: string;
  readonly owner: string;
  readonly composite_id: string;
  readonly model_name?: PermissionType;
}
/**
 * Password Interface
 */
export interface IPassword {
  readonly current_password?: string;
  readonly new_password?: string;
}
export enum ApplicationType {
  DESKTOP = 'panel',
  MOBILE = 'mobile',
}
