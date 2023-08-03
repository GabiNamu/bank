import IAccount from '../interfaces/IAccount';
import AccountModel from '../database/models/Account.model';

export default class AccountService {
	public static async create(newAccount: IAccount): Promise<IAccount | string> {
		const account = await AccountModel.create(newAccount);
		return account;
	}
}