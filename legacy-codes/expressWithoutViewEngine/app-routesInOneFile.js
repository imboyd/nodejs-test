//const http = require('http');
const pino = require('pino-http')();
//const bodyParser = require('body-parser');

const express = require('express');

const app = express();

//app.use(pino);

//app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    console.log('In the Middleware - /add-product');
    res.send('<form action="/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log('In the Middleware - /product');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    //console.log('In the Middleware - /');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);