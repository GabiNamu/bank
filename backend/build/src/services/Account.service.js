"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_model_1 = require("../database/models/Account.model");
class AccountService {
    static async create(newAccount) {
        const account = await Account_model_1.default.create(newAccount);
        return account;
    }
    static async update(newInfo, id) {
        await Account_model_1.default.update(newInfo, { where: { id } });
        return { message: 'updated' };
    }
}
exports.default = AccountService;
//# sourceMappingURL=Account.service.js.map