import { Options } from 'sequelize';
// oi
console.log(process.env.DB_HOST);
const config: Options = {
	username: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'password',
	database: process.env.DB_NAME || 'bank',
	host: process.env.DB_HOST || 'localhost',
	port: Number(process.env.DB_PORT) || 3998,
	dialect: 'mysql',
};

export = config;
