"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayBusinessListPage = void 0;
const business_1 = __importDefault(require("../Models/business"));
const Util_1 = require("../Util");
function DisplayBusinessListPage(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'business-list', business: businessCollection, displayName: Util_1.UserDisplayName(req) });
    }).sort({ "name": 1 }).collation({ locale: "en_US", numericOrdering: true });
}
exports.DisplayBusinessListPage = DisplayBusinessListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    business_1.default.findById(id, {}, {}, (err, businessContactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'update', business: businessContactToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', business: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedBusinessContact = new business_1.default({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });
    business_1.default.updateOne({ _id: id }, updatedBusinessContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new business_1.default({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });
    business_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    business_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=business.js.map