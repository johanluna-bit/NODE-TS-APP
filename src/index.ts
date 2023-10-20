import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'view'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));

//Middlewares
app.use(express.json()); //entender JSON que lleguen al servidor
app.use(express.urlencoded({extended: false})); //cuando un formularo HTTP envia un dato, se puede leer el dato

//Routes

//Statics Files

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on Port: ${app.get('port')}`);
});