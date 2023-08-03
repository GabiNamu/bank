import { Model, INTEGER, STRING, BOOLEAN, DataTypes } from 'sequelize';
import db from '.';
import IAccount from '../../interfaces/IAccount';

class Account extends Model<IAccount> {
	declare 'id': number;
	declare 'documento': string;
	declare 'name': string;
	declare 'email': string;
	declare 'password': string;
	declare 'status': boolean;
}

Account.init({
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: INTEGER,
	},
	documento: {
		allowNull: false,
		type: STRING,
	},
	name: {
		allowNull: false,
		type: STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	password: {
		allowNull: false,
		type: STRING,
	},
	status: {
		allowNull: false,
		type: BOOLEAN,
	}
}, {
	sequelize: db,
	modelName: 'accounts',
	timestamps: false,
	underscored: true,
});

export default Account;