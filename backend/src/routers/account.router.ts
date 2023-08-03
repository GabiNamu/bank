import { Router } from 'express';
import AccountController from '../controllers/Account.controller';
import validateAccount from '../middlewares/validateAccount';

const accountRouter = Router();
accountRouter.post('/', 
	(req, res, next) => validateAccount(req, res, next),
	(req, res) => AccountController.create(req, res),);

export default accountRouter;