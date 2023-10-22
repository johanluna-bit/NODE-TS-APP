"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const usersController_1 = require("../controllers/usersController");
router.get('/', usersController_1.usersController.index);
router.get('/add', usersController_1.usersController.renderFormUser);
router.post('/add', usersController_1.usersController.saveUser);
exports.default = router;
