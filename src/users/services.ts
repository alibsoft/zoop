import { IProfile, IResponse } from '../common';
import { IMarketplace } from '../marketplace';

import {
  ApplicationType,
  ICredentials,
  IPassword,
  IPermissions,
  IUser,
} from './interfaces';
import { signInUserScheme, userScheme } from './validations';

/**
 * Criar usuário Dashboard e Minha Conta
 */
export const createUser = (
  marketplace: IMarketplace,
  body: IUser,
  invite?: boolean
) => {
  userScheme.validateSync(body);
  return marketplace.post<IUser, IUser>(`/users?${invite || false}`, body);
};
/**
 * Listar usuário do Dashboard e Minha Conta pelo identificador
 */
export const getUser = (marketplace: IMarketplace, userId: string) => {
  return marketplace.get<IUser>(`/users/${userId}`);
};
/**
 * Listar usuários do Dashboard e Minha Conta
 */
export const getUsers = (marketplace: IMarketplace) => {
  return marketplace.get<IResponse<IUser>>(`/users`);
};

/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
export const createNewPassword = (
  marketplace: IMarketplace,
  userId: string,
  body: IPassword
) => {
  return marketplace.post<unknown, IPassword>(
    `/users/${userId}/password`,
    body
  );
};

/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
export const forgotPassword = (
  marketplace: IMarketplace,
  username: string,
  application?: ApplicationType
) => {
  return marketplace.post<unknown, unknown>(
    `/users/recover-access?${application}`,
    {
      username,
    }
  );
};
/**
 * Criar permissão para usuário do Dashboard e Minha Conta
 */
export const createPermissions = (
  marketplace: IMarketplace,
  userId: string,
  body: readonly IPermissions[]
) => {
  return marketplace.post<unknown, unknown>(
    `/users/${userId}/permissions`,
    body
  );
};

/**
 * Listar permissão para usuário do Dashboard e Minha Conta pelo identificador
 */
export const getPermissions = (marketplace: IMarketplace, userId: string) => {
  return marketplace.get<unknown>(`/users/${userId}/permissions`);
};
/**
 * Alterar nome e sobrenome de usuário do Dashboard e Minha Conta
 */
export const updateProfile = (
  marketplace: IMarketplace,
  userId: string,
  body: IProfile
) => {
  return marketplace.patch<unknown, IProfile>(`/users/${userId}`, body);
};
/**
 * Deletar permissão de usuário do Dashboard e Minha Conta
 */
export const deletePermissions = (
  marketplace: IMarketplace,
  userId: string
) => {
  return marketplace.delete<unknown>(`/users/${userId}`);
};
/**
 * SignIn
 */
export const signInUser = (marketplace: IMarketplace, body: ICredentials) => {
  signInUserScheme.validateSync(body);
  return marketplace.post<IUser, unknown>(`/users/signin`, body, {
    absolute: true,
  });
};
