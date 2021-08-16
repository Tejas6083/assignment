var express = require("express");
var app = express();
var cors = require("cors");
require("./db/mongoose");

const user = require("./routes/UserRoute");
const overview = require("./routes/OverviewRoute");
const post = require("./routes/PostRoute");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use(user);
app.use(overview);
app.use(post);

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server ${Port} reporting Sir`);
});
