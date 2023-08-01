"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('transactions', [
            {
                price: 1000.00,
                account_id: 1,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('transactions', {});
    }
};
//# sourceMappingURL=02-transactions.js.map