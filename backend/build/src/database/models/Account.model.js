"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    documento: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    status: {
        allowNull: false,
        type: sequelize_1.BOOLEAN,
    }
}, {
    sequelize: _1.default,
    modelName: 'accounts',
    timestamps: false,
    underscored: true,
});
exports.default = Account;
//# sourceMappingURL=Account.model.js.map