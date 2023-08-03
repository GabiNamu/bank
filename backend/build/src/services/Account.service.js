"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_model_1 = require("../database/models/Account.model");
class AccountService {
    static async create(newAccount) {
        const account = await Account_model_1.default.create(newAccount);
        return account;
    }
}
exports.default = AccountService;
//# sourceMappingURL=Account.service.js.map