import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

//Importing Routes
import IndexRoutes from './routes'
import UsersRoutes from './routes/users'

//Initializations
const app = express();
import './database';

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({ //Definir como funciona el modulo de plantilla
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json()); //entender JSON que lleguen al servidor
app.use(express.urlencoded({extended: false})); //cuando un formularo HTTP envia un dato, se puede leer el dato

//Routes
app.use ('/', IndexRoutes)
app.use('/users', UsersRoutes); //app.use para multiples rutas por que se exporta un objeto con muchas rutas

//Statics Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on Port: ${app.get('port')}`);
});