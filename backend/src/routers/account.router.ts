import { Router } from 'express';
import AccountController from '../controllers/Account.controller';
import validateAccount from '../middlewares/validateAccount';
import authMiddleware from '../middlewares/auth';
import validateUpdateAccount from '../middlewares/validateUpdateAccount';

const accountRouter = Router();
accountRouter.post('/', 
	(req, res, next) => validateAccount(req, res, next),
	(req, res) => AccountController.create(req, res));
accountRouter.patch('/:id',
	(req, res, next) => authMiddleware(req, res, next),
	(req, res, next) => validateUpdateAccount(req, res, next),
	(req, res) => AccountController.update(req, res));
accountRouter.delete('/',
	(req, res, next) => authMiddleware(req, res, next),
	(req, res) => AccountController.delete(req, res));

export default accountRouter;