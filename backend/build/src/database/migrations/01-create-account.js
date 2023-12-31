"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('accounts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            documento: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            status: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: true,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('accounts');
    }
};
//# sourceMappingURL=01-create-account.js.map