var express = require("express");
var app = express();
require("./db/mongoose");

app.use(express.json());

const Port = process.env.PORT || 3000;

app.listen(Port, () => { 
    console.log(`Server ${Port} reporting Sir`);
});