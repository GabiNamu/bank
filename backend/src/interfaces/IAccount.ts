interface IAccount {
  'id'?: number,
  'cpf/cnpj': string,
  'name': string,
  'email': string,
  'password': string,
  'status': boolean,
}

export default IAccount;