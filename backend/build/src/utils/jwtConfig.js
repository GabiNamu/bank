"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function sign(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'SECRET');
    return token;
}
function verify(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'SECRET');
    return decoded;
}
exports.default = {
    sign,
    verify,
};
//# sourceMappingURL=jwtConfig.js.map