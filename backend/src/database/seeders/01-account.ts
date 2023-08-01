// src/database/seeders/01-users.ts

import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('accounts', [
			{
				'cpf/cnpj': '003.939.708-41',
				name: 'Amberly Schreave',
				email: 'a.schreave@live.com',
				password: 'testsenha',
				status: true,
			},
			{
				'cpf/cnpj': '008.939.808-46',
				name: 'Clackson Schreave',
				email: 'c.schreave@live.com',
				password: 'testsenha2',
				status: true,
			},
			{
				'cpf/cnpj': '008.979.808-98',
				name: 'Madeline Singer',
				email: 'm.singer@live.com',
				password: 'testsenha3',
				status: false,
			},
		], {});
	},
  
	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('accounts', {});
	}
};