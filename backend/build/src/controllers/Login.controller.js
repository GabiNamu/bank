"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login_service_1 = require("../services/Login.service");
class LoginController {
    static async login(req, res) {
        const { email, password } = req.body;
        const token = await Login_service_1.default.login(email, password);
        if (typeof token !== 'string')
            return res.status(401).json(token);
        return res.status(200).json({ token });
    }
}
exports.default = LoginController;
//# sourceMappingURL=Login.controller.js.map