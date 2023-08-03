import { AuthenticatedRequest } from './../middlewares/auth';
import { Request, Response } from 'express';
import AccountService from '../services/Account.service';

export default class AccountController {
	public static async create(req: Request, res: Response) {
		const newAccount = await AccountService.create(req.body);
		return res.status(201).json(newAccount);
	}

	public static async update(req: Request, res: Response) {
		const { id } = req.params;
		const newAccount = await AccountService.update(req.body, Number(id));
		return res.status(200).json(newAccount);
	}

	public static async delete(req: Request, res: Response) {
		const { email } = (req as AuthenticatedRequest).auth;
		const deleteAccount = await AccountService.delete(email);
		return res.status(200).json(deleteAccount);
	}
}