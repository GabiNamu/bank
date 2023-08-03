import { Model, INTEGER, DATEONLY, DECIMAL } from 'sequelize';
import db from '.';
import ITransaction from '../../interfaces/ITransaction';
import Account from './Account.model';

class Transaction extends Model<ITransaction> {
	declare 'id': number;
	declare 'price': number;
	declare 'accountId': number;
	declare 'date': Date;
	declare 'cashback'?: number;
}

Transaction.init({
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: INTEGER,
	},
	price: {
		allowNull: false,
		type: DECIMAL(10, 2),
	},
	accountId: {
		allowNull: false,
		field: 'account_id',
		type: INTEGER,
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
		references: {
			model: 'accounts',
			key: 'id',
		}
	},
	date: {
		allowNull: false,
		type: DATEONLY,
		defaultValue: new Date(),
	},
	cashback: {
		allowNull: true,
		type: INTEGER,
	},
}, {
	sequelize: db,
	modelName: 'transactions',
	timestamps: false,
	underscored: true,
});

Transaction.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });
Account.hasMany(Transaction, { foreignKey: 'accountId', as: 'transaction' });

export default Transaction;