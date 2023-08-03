import jwtConfig from '../utils/jwtConfig';
import AccountModel from '../database/models/Account.model';
//oi
export default class LoginService {
	public static async login(email: string, password: string)
    : Promise<string | { message: string }> {
		const userExist = await AccountModel.findOne({ where: { email } });
		if (!userExist) {
			return { message: 'Invalid email or password' };
		}
		if (password !== userExist.password) {
			return { message: 'Invalid email or password' };
		}
		return jwtConfig.sign({ email, password });
	}
}