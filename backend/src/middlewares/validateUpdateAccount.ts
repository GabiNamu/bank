import { NextFunction, Request, Response } from 'express';

const validateUpdateAccount = (req: Request, res: Response, next: NextFunction) => {
	const { documento } = req.body;
	if (documento) {
		return res.status(401).json({ message: 'O CPF/CNPJ não pode ser alterado!' });
	}
	next();
};

export default validateUpdateAccount;