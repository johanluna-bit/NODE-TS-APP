"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_1 = __importDefault(require("../models/users"));
class UsersController {
    renderFormUser(req, res) {
        res.render('users/add', { title: 'Add a user' });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield users_1.default.find();
            res.render('users/index', {
                title: 'Users',
                users
            });
        });
    }
    saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, lastname, email, password, adress, description, typeUser } = req.body;
            const user = new users_1.default(req.body);
            yield user.save();
            console.log(req.body);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield users_1.default.findById(id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            yield (user === null || user === void 0 ? void 0 : user.deleteOne());
            res.status(204).send();
        });
    }
}
exports.usersController = new UsersController();