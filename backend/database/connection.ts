import mysql from 'mysql2/promise';
const conn = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT || 3306),
});

export default conn;