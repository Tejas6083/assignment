var express = require("express");
var app = express();
require("./db/mongoose");

const user = require("./routes/UserRoute");
const overview = require("./routes/OverviewRoute");

app.use(express.json());

app.use(user);
app.use(overview);

const Port = process.env.PORT || 3000;

app.listen(Port, () => { 
    console.log(`Server ${Port} reporting Sir`);
});