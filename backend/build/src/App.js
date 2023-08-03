"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const account_router_1 = require("./routers/account.router");
const login_router_1 = require("./routers/login.router");
class App {
    constructor(account = account_router_1.default, login = login_router_1.default) {
        this.account = account;
        this.login = login;
        this.app = express();
        this.config();
        this.app.get('/health', (_req, res) => res.status(200).send('API no ar!'));
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.use('/account', this.account);
        this.app.use('/login', this.login);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`API no ar na porta ${PORT}!`));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map