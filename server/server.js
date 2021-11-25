const express = require('express');
const mysql      = require('mysql');


const routes = require('./routes')
const config = require('./config.json')

const app = express();

// Route 0 - Test only
app.get('/test', routes.test)

// Route 1 - register as GET 
app.get('/dog_friendly', routes.dog_friendly)

// Route 2 - register as GET 
app.get('/dog_height', routes.dog_height)

// Route 3 - register as GET 
app.get('/sort_adaptability', routes.sort_adapatability)

// Route 4 - register as GET 
app.get('/dog_count', routes.dog_count)

// Route 5 - register as GET 
app.get('/stars', routes.stars)

// Route 6 - register as GET 
app.get('/sort_lifespan', routes.sort_lifespan)

// Route 7 - register as GET 
app.get('/sort_avgheight', routes.sort_avgheight)

// Route 8 - register as GET 
app.get('/lifespan', routes.lifespan)

// Route 9 - register as GET 
app.get('/image', routes.image)

// Route 10 - register as GET 
app.get('/pictures', routes.pictures)

// Route 11 - register as GET 
app.get('/dog_filter', routes.dog_filter)

app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
