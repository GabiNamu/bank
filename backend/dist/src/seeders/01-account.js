"use strict";
// src/database/seeders/01-users.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('accounts', [
            {
                'cpf/cnpj': '003.939.708-41',
                name: 'Amberly Schreave',
                email: 'a.schreave@live.com',
                password: 'testsenha',
                status: true,
            },
            {
                'cpf/cnpj': '008.939.808-46',
                name: 'Clackson Schreave',
                email: 'c.schreave@live.com',
                password: 'testsenha2',
                status: true,
            },
            {
                'cpf/cnpj': '008.979.808-98',
                name: 'Madeline Singer',
                email: 'm.singer@live.com',
                password: 'testsenha3',
                status: false,
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('accounts', {});
    })
};
