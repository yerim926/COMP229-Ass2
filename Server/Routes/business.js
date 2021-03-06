// File Name : business.js
// Student's Name : Yerim Cho
// Student ID : 301143325
// Date : June 18th, 2021

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const business_1 = require("../Controllers/business");
const index_1 = require("../Util/index");
router.get('/', business_1.DisplayBusinessListPage);
router.get('/add', index_1.AuthGuard, business_1.DisplayAddPage);
router.get('/edit/:id', index_1.AuthGuard, business_1.DisplayEditPage);
router.post('/add', index_1.AuthGuard, business_1.ProcessAddPage);
router.post('/edit/:id', index_1.AuthGuard, business_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, business_1.ProcessDeletePage);
//# sourceMappingURL=business.js.map