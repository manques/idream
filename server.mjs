import express from 'express';
import path from 'path';

// env
import dotenv from 'dotenv';
dotenv.config();

import { create, handle } from './controller/error/error.mjs';
import routes from './routes/routes.mjs';

// create server
const app = express();

// ----- middlewares ----
// setup view engine - ejs
app.set('views', path.join('./views'));
app.set('view engine', 'ejs');
// morgon

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cookie parser

// routes
app.use(routes);

// expose static folder "public"
app.use(express.static(path.join('./public')));


// error handle
app.use(create);
app.use(handle);
// host and port 
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`server running at ${host}:${port}`);
});