"use strict";
// src/database/seeders/01-users.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('accounts', [
            {
                documento: '003.939.708-41',
                name: 'Amberly Schreave',
                email: 'a.schreave@live.com',
                password: 'testsenha',
                status: true,
            },
            {
                documento: '008.939.808-46',
                name: 'Clackson Schreave',
                email: 'c.schreave@live.com',
                password: 'testsenha2',
                status: true,
            },
            {
                documento: '008.979.808-98',
                name: 'Madeline Singer',
                email: 'm.singer@live.com',
                password: 'testsenha3',
                status: false,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('accounts', {});
    }
};
//# sourceMappingURL=01-account.js.map