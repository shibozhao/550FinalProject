const express = require('express');
const mysql = require('mysql');


const routes = require('./routes')
const config = require('./config.json')
const cors = require('cors');


const app = express();
app.use(cors({
    origin: '*'
}));


// dogpedia
app.get('/breed', routes.search_breed)

app.get('/home', routes.search_breed_vague)

app.get('/image', routes.find_image)

app.get('/random', routes.random_query)

app.get('/search', routes.search_criteria)


app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;