"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_service_1 = require("../services/Account.service");
class AccountController {
    static async create(req, res) {
        const newAccount = await Account_service_1.default.create(req.body);
        return res.status(201).json(newAccount);
    }
    static async update(req, res) {
        const { id } = req.params;
        const newAccount = await Account_service_1.default.update(req.body, Number(id));
        return res.status(200).json(newAccount);
    }
}
exports.default = AccountController;
//# sourceMappingURL=Account.controller.js.map