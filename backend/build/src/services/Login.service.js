"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const jwtConfig_1 = require("../utils/jwtConfig");
const Account_model_1 = require("../database/models/Account.model");
class LoginService {
    static async login(email, password) {
        const userExist = await Account_model_1.default.findOne({ where: { email } });
        if (!userExist) {
            return { message: 'Invalid email or password' };
        }
        const unlock = (0, bcryptjs_1.compareSync)(password, userExist.password);
        if (!unlock) {
            return { message: 'Invalid email or password' };
        }
        return jwtConfig_1.default.sign({ email, password });
    }
}
exports.default = LoginService;
//# sourceMappingURL=Login.service.js.map