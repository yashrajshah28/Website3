const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// mongoose.connect(DB).then(() => {
//     console.log(`connection successful`);
// }).catch((err) => console.log(`no connection`));


// Middelware

// const middelware = (req, res, next) => {
//     console.log(`Hello Middleware`);
//     next();
// }

// middelware();


// app.get('/', (req, res) => {
//     res.send(`Hello form the server app.js`)
// });

// app.get('/about', middelware, (req, res) => {
//     console.log(`Hello About`);
//     res.send(`Hello About form the server`)
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello Contact form the server`)
// });

app.get('/login', (req, res) => {
    res.send(`Hello Login form the server`)
});

app.get('/signup', (req, res) => {
    res.send(`Hello Signup form the server`)
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})