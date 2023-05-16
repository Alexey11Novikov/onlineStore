const express = require("express");
const app = express();
const cors = require("cors");
const route = require('./src/routes/routs');
const bodyParser = require('body-parser');

let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api', route);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Start server" });
});

// set port, listen for requests
app.listen(5000, function () {
    console.log(
        "Server is running on port 5000"
    );
});