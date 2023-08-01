import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('transactions', [
			{
				price: 1000.00,
				account_id: 1,
			},
		], {});
	},
  
	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('transactions', {});
	}
};