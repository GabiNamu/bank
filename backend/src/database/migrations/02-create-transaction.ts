import { Model, QueryInterface, DataTypes }from 'sequelize'; 

import ITransaction from '../../interfaces/ITransaction';

export default { 
	up(queryInterface: QueryInterface) { 
		return queryInterface.createTable<Model<ITransaction>>('transactions', { 
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			price: {
				allowNull: false,
				type: DataTypes.DECIMAL(10, 2),
			},
			accountId: {
				allowNull: false,
				field: 'account_id',
				type: DataTypes.INTEGER,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'accounts',
					key: 'id',
				}
			},
			date: {
				allowNull: false,
				type: DataTypes.DATEONLY,
				defaultValue: new Date(),
			},
			cashback: {
				allowNull: true,
				type: DataTypes.INTEGER,
			},
		}); 
	}, 
  
	down(queryInterface: QueryInterface) { 
		return queryInterface.dropTable('transactions'); 
	} 
};