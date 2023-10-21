"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
//Importing Routes
const routes_1 = __importDefault(require("./routes"));
const users_1 = __importDefault(require("./routes/users"));
// -- Solucion de permisos en handlerbars
const handlebars_1 = __importDefault(require("handlebars"));
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access"); //libreria para volver a version antigua de hbs que no bloquea los prototipos
//Initializations
const app = (0, express_1.default)();
require("./database");
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main',
    handlebars: (0, allow_prototype_access_1.allowInsecurePrototypeAccess)(handlebars_1.default) //consede los permisos de la libreria y evita los problemas de acceso
}));
app.set('view engine', '.hbs');
//Middlewares
app.use(express_1.default.json()); //entender JSON que lleguen al servidor
app.use(express_1.default.urlencoded({ extended: false })); //cuando un formularo HTTP envia un dato, se puede leer el dato
//Routes
app.use('/', routes_1.default);
app.use('/users', users_1.default); //app.use para multiples rutas por que se exporta un objeto con muchas rutas
//Statics Files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on Port: ${app.get('port')}`);
});
