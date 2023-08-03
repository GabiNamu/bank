"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtConfig_1 = require("../utils/jwtConfig");
async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwtConfig_1.default.verify(token);
        req.auth = {
            email: decoded.email,
        };
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
}
exports.default = authMiddleware;
//# sourceMappingURL=auth.js.map