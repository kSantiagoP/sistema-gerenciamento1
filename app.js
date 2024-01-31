const express = require("express");
const clientsRoute = require("./routes/clientes");
const cors = require("cors");


const app =  express();


const port = 8000;

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/clientes', clientsRoute);


app.listen(port);