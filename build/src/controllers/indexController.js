"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.render('index', { title: 'Welcome to work' });
    }
}
exports.indexController = new IndexController();