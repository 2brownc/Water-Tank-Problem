import path from 'path';
import { fileURLToPath } from 'url';

import express from "express";
import { engine as expressHandlebars } from 'express-handlebars';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// home page
app.get('/', (req, res) => res.render('home'));


// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})


app.listen(port, () => console.log(
  `Server started at http://localhost:${port}
  Press ctrl-c to terminate`));