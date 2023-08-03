"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_model_1 = require("./Account.model");
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    price: {
        allowNull: false,
        type: (0, sequelize_1.DECIMAL)(10, 2),
    },
    accountId: {
        allowNull: false,
        field: 'account_id',
        type: sequelize_1.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: 'accounts',
            key: 'id',
        }
    },
    date: {
        allowNull: false,
        type: sequelize_1.DATEONLY,
        defaultValue: new Date(),
    },
    cashback: {
        allowNull: true,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: _1.default,
    modelName: 'transactions',
    timestamps: false,
    underscored: true,
});
Transaction.belongsTo(Account_model_1.default, { foreignKey: 'accountId', as: 'account' });
Account_model_1.default.hasMany(Transaction, { foreignKey: 'accountId', as: 'transaction' });
exports.default = Transaction;
//# sourceMappingURL=Transaction.model.js.map