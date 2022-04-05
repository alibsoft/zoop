import { AccountType, IBankAccount } from '../src/bankAccount';
import { IBuyer } from '../src/buyers';
import { IConfig, IMarketplace, Marketplace } from '../src/marketplace';
import { IBusiness, ISeller } from '../src/sellers';
import { ICard } from '../src/tokens';
import { ICredentials, IUser } from '../src/users';

/**
 * Configuração do Marketplace
 */

const config: IConfig = {
  marketplaceId: '',
  publishableKey: '',
  sandbox: true,
};
/**
 * Instancia do Marketplace
 */
export const marketplace: IMarketplace = Marketplace.instance(config);
/**
 * Objeto Credencial
 */
export const user: IUser = {
  username: 'saitama.io@gmail.com',
  password: 'Senha123456!',
  first_name: 'Saitama',
  last_name: 'Master',
};
export const credentials: ICredentials = {
  username: 'saitama.io@gmail.com',
  password: 'Senha123456!',
};
export const bankAccount: IBankAccount = {
  holder_name: 'Mariana Isabella Sabrina Almeida',
  bank_code: '001',
  account_number: 2800217,
  routing_number: 1557,
  taxpayer_id: '22342178492',
  type: AccountType.CORRENTE,
};
/**
 * Objeto Comprador
 */
export const buyer: IBuyer = {
  first_name: 'Mariana Isabella',
  last_name: 'Sabrina Almeida',
  email: 'mariana@tortasecreta.com',
  phone_number: '849969597026',
  taxpayer_id: '22342178492',
  birthdate: '1988-06-26',
  address: {
    line1: 'Rua Padre Germano',
    line2: '1148',
    neighborhood: 'Lagoa Nova',
    postal_code: '59075205',
    country_code: 'BR',
    city: 'Natal',
    state: 'RN',
  },
};
/**
 * Objeto Vendedor Pessoa Física
 */
export const seller: ISeller = {
  first_name: 'Mario',
  last_name: 'Franco',
  email: 'martha.melo13@live.com',
  phone_number: '2120689053',
  taxpayer_id: '65141717968',
  birthdate: '1986-07-05',
  address: {
    line1: 'Macedo Rua',
    line2: '1148',
    neighborhood: 'Bairro',
    postal_code: '31638972',
    country_code: 'BR',
    city: 'Egon de Nossa Senhora',
    state: 'SP',
  },
  mcc: '5989',
};
/**
 * Objeto Vendedor Pessoa Jurídica
 */
export const business: IBusiness = {
  owner: {
    first_name: 'Saitama',
    last_name: 'Pouch',
    email: 'mail@saitama.com',
    phone_number: '2120689053',
    taxpayer_id: '65141717968',
    birthdate: '1986-07-05',
  },
  owner_address: {
    line1: 'Macedo Rua',
    line2: '1148',
    neighborhood: 'Bairro',
    postal_code: '31638972',
    country_code: 'BR',
    city: 'Egon de Nossa Senhora',
    state: 'SP',
  },
  business_name: 'Saitama Inc.',
  business_email: 'mail@saitama.com',
  business_phone: '2120689053',
  business_opening_date: '2016-12-15',
  ein: '26715503000137',
  statement_descriptor: 'Saitama',
  business_address: {
    line1: 'Macedo Rua',
    line2: '1148',
    neighborhood: 'Bairro',
    postal_code: '31638972',
    country_code: 'BR',
    city: 'Egon de Nossa Senhora',
    state: 'SP',
  },
  mcc: '5989',
};
//A transação será aceita.
export const cardOne: ICard = {
  holder_name: 'Mario Cardoso',
  card_number: '5138692036125449',
  expiration_month: '01',
  expiration_year: '2028',
  security_code: '123',
};
//A transação será recusada com um código "card_declined".
export const cardTwo: ICard = {
  holder_name: 'Mario Cardoso',
  card_number: '4710426743216178', //6011457819940087
  expiration_month: '01',
  expiration_year: '2028',
  security_code: '123',
};
//A transação será recusada com um código "service_request_timeout".
export const cardThree: ICard = {
  holder_name: 'Mario Cardoso',
  card_number: '4710426743216178',
  expiration_month: '01',
  expiration_year: '2028',
  security_code: '123',
};
