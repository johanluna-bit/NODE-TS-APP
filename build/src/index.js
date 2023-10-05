"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Initializations
const app = (0, express_1.default)();
//Settings
app.set('port', 3000);
//Middlewares
//Routes
//Statics Files
//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on Port: ${app.get('port')}`);
});
