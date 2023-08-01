"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_2.DataTypes.INTEGER,
            },
            price: {
                allowNull: false,
                type: sequelize_2.DataTypes.DECIMAL(10, 2),
            },
            accountId: {
                allowNull: false,
                field: 'account_id',
                type: sequelize_2.DataTypes.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'accounts',
                    key: 'id',
                }
            },
            date: {
                allowNull: false,
                type: sequelize_2.DataTypes.DATEONLY,
                defaultValue: sequelize_1.Sequelize.fn('now'),
            },
            cashback: {
                allowNull: true,
                type: sequelize_2.DataTypes.INTEGER,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('transactions');
    }
};
