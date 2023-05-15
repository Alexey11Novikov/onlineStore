const express = require("express");
const app = express();
const cors = require("cors");
const route = require('./src/routes/routs');

const axios = require("axios");

let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use('/api', route);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Start server" });
});

// app.get("/api/getCustomer", async (req, res) => {

//     console.log("getCustomer");
//     // res.send({ message: "Start server" });
//     let urlHost = "/getCustomer";
//     try {
//         let response = await axios.get(urlHost);
//         console.log(response)
//         res.send(JSON.stringify(response.data));
//     } catch (error) {
//         res.status(500).send({ error: error });
//     }
// });


// set port, listen for requests
app.listen(5000, function () {
    console.log(
        "Server is running on port 5000"
    );
});