/**
 * Split Interface
 */
interface ISplit {
  //Identificador do seller recebedor
  readonly recipient: string;
  //Define se o recebedor arca com prejuízo em caso de chargeback ou não.
  //1 ou (true) arca; 0 ou (false) não arca.
  readonly liable: boolean;
  //Define que ira ser feito split em cima do valor bruto (0) ou false
  readonly charge_processing_fee: string;
}
/**
 * Split Recipient assume o valor total da taxa
 */
interface ISplitRecipient {
  // Carrega o valor da taxa da venda para o recipient quando definido como 1 ou true.
  readonly charge_recipient_processing_fee: string;
}
/**
 * Split Recipient assume o valor total da taxa
 */
interface ISplitGross {
  //Quando o valor (amount) é passado exatamente igual ao
  //valor da transação ocorre o erro pois, o parceiro esquece da taxa Zoop.
  // Para evitar esse tipo de problema, deve-se usar está opção como 1 ou true e,
  // com isso, a API irá considerar a taxa Zoop antes do split.
  readonly is_gross_amount: string;
}

/**
 * Split por valor taxas do seller (principal)
 */
export interface ISplitValue extends ISplit {
  // Valor em centavos a ser splitado.
  readonly amount: number;
}
/**
 * Split por valor taxas do seller (principal)
 */
export interface ISplitPercentage extends ISplit {
  // Percentual da venda a ser splitado.
  readonly percentage: number;
}

/**
 * Split por valor recipient assume o valor total da taxa
 */
export interface ISplitRecipientValue extends ISplitRecipient, ISplitValue {}
/**
 * Split por porcentagem recipient assume o valor total da taxa
 */
export interface ISplitRecipientPercentage
  extends ISplitRecipient,
    ISplitPercentage {}

/**
 * Split por valor recipiente assume todo o valor da transacao
 */
export interface ISplitGrossValue
  extends ISplitGross,
    ISplitRecipient,
    ISplitValue {}
