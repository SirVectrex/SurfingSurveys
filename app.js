const express = require('express');
const exphbs = require('express-handlebars');

const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));


const routes = require("./routing");
app.use("/", routes);


app.listen(process.env.PORT, () => {
    console.log(`Survey Template listening on ${process.env.PORT}`);
});