import * as bcrypt from 'bcryptjs';

async function comparePassword(plaintextPassword: string, hash: string) {
	const result = await bcrypt.compare(plaintextPassword, hash);
	console.log(result);
	return result;
}

export default comparePassword;