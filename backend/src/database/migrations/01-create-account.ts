import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import IAccount from '../../interfaces/IAccount';

export default { 
	up(queryInterface: QueryInterface) { 
		return queryInterface.createTable<Model<IAccount>>('accounts', { 
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			documento: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			status: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			}
		}); 
	}, 
  
	down(queryInterface: QueryInterface) { 
		return queryInterface.dropTable('accounts'); 
	} 
};