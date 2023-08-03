import { Request, Response } from 'express';
import AccountService from '../services/Account.service';

export default class AccountController {
	public static async create(req: Request, res: Response) {
		const newAccount = await AccountService.create(req.body);
		return res.status(201).json(newAccount);
	}
}