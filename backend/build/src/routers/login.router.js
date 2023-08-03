"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_controller_1 = require("../controllers/Login.controller");
const validateLogin_1 = require("../middlewares/validateLogin");
const loginRouter = (0, express_1.Router)();
loginRouter.post('/', (req, res, next) => (0, validateLogin_1.default)(req, res, next), (req, res) => Login_controller_1.default.login(req, res));
exports.default = loginRouter;
//# sourceMappingURL=login.router.js.map