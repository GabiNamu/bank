import { NextFunction, Request, Response } from 'express';

const validateAccount = (req: Request, res: Response, next: NextFunction) => {
	const { documento, name, email, password } = req.body;
	const regex = /\S+@\S+\.\S+/;
	let sum = 0;
	if (!documento || !name || ! email || !password) {
		return res.status(400).json({ message: 'All fields must be filled' });
	}
	if (!regex.test(email) || password.length < 6) {
		return res.status(401).json({ message: 'Invalid email or password' });
	}
	for (let i = 0; i < documento.length; i ++) {
		sum += Number(documento[i]);
	}
	console.log(sum);
	const arraySum = String(sum).split('');
	console.log(arraySum);
	if (arraySum[0] !== arraySum[1]) {
		return res.status(400).json({ message: 'You need to add a valid CPF or CNPJ' });
	}
	next();
};

export default validateAccount;