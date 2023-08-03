import IAccount from '../interfaces/IAccount';
import IUpdateAccount from '../interfaces/IUpdateAccount';
import AccountModel from '../database/models/Account.model';

export default class AccountService {
	public static async create(newAccount: IAccount): Promise<IAccount | string> {
		const account = await AccountModel.create(newAccount);
		return account;
	}

	public static async update(newInfo: IUpdateAccount, id: number): Promise<{ message: string }> {
		await AccountModel.update(newInfo, { where: {id}});
		return {message: 'updated'};
	}

	public static async delete(email: string): Promise<{ message: string }> {
		console.log('hi');
		await AccountModel.update({status: false}, { where: {email}});
		console.log('hello');
		return {message: 'account disabled'};
	}
}