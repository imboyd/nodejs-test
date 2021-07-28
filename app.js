const tracer = require('dd-trace').init(
    logIngestion = true
);
console.log('Init dd-trace');

const path = require('path');

//const http = require('http');
const pino = require('pino-http')();
//const bodyParser = require('body-parser');
//const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes  = require('./routes/shop');

const express = require('express');

const app = express();

app.use(pino);

//app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

//app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);


// Catch all undefine routes
//app.use('/', (req, res, next) => {
app.use((req, res, next) => {
    console.log('Page not found');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);