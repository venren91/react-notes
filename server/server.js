const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./app/config/db')
const port = 8080;
var cors = require('cors');

    app.use(cors({origin: 'http://localhost:3000'}));

    /** bodyParser.urlencoded(options)
        * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
        * and exposes the resulting object (containing the keys and values) on req.body
     */
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**bodyParser.json(options)
        * Parses the text as JSON and exposes the resulting object on req.body.
    */
    app.use(bodyParser.json());
        app.listen(port,() => console.log("Listening on port " + port));

mongoClient.connect(db.url,{ useNewUrlParser: true },(err, client) => {
    var database = client.db('notes');
    if(err) return console.log(err);
    require('./app/routes')(app,database);    
})

