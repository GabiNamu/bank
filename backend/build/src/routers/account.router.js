"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Account_controller_1 = require("../controllers/Account.controller");
const validateAccount_1 = require("../middlewares/validateAccount");
const auth_1 = require("../middlewares/auth");
const accountRouter = (0, express_1.Router)();
accountRouter.post('/', (req, res, next) => (0, validateAccount_1.default)(req, res, next), (req, res) => Account_controller_1.default.create(req, res));
accountRouter.put('/:id', (req, res, next) => (0, auth_1.default)(req, res, next));
exports.default = accountRouter;
//# sourceMappingURL=account.router.js.map