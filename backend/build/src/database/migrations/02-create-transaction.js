"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            price: {
                allowNull: false,
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
            },
            accountId: {
                allowNull: false,
                field: 'account_id',
                type: sequelize_1.DataTypes.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'accounts',
                    key: 'id',
                }
            },
            date: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATEONLY,
                defaultValue: new Date(),
            },
            cashback: {
                allowNull: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('transactions');
    }
};
//# sourceMappingURL=02-create-transaction.js.map