/* eslint-disable functional/no-return-void */

import { createUser, getUser, getUsers, signInUser } from '../../src/users';
import { credentials, marketplace, user } from '../index';

/**
 * Marketplace Tests API
 */
describe('Users Test', () => {
  /**
   * Listar usuários do Dashboard e Minha Conta
   */

  test('Listar usuários do Dashboard e Minha Conta', async () => {
    const res = await getUsers(marketplace);
    const data = res.data;
    expect(data.items?.length).toBeGreaterThanOrEqual(0);
  }, 30000);
  /**
   * Criar usuário Dashboard e Minha Conta
   */

  test('Criar usuário Dashboard e Minha Conta', async () => {
    const res = await createUser(marketplace, user);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Criar usuário Dashboard e Minha Conta com Convite
   */

  test('Criar usuário Dashboard e Minha Conta com Convite', async () => {
    const res = await createUser(marketplace, user, true);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Listar usuário do Dashboard e Minha Conta pelo identificador
   */

  test('Listar usuário do Dashboard e Minha Conta pelo identificador', async () => {
    const userId = '9ea7ca6396c24f55bfdd59dd81054904';
    const res = await getUser(marketplace, userId);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
  /**
   * Verificar acesso de usuário do Dashboard e Minha Conta
   */

  test('Verificar acesso de usuário do Dashboard e Minha Conta', async () => {
    const res = await signInUser(marketplace, credentials);
    const data = res.data;
    expect(data.id).not.toBeNull();
  });
});
