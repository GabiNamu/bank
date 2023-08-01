"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        // Não remover essa rota
        this.app.get('/health', (_req, res) => res.status(200).send('API no ar!'));
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`API no ar na porta ${PORT}!`));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map