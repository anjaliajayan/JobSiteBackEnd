const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const profileRoute = require('./routes/profile');
const userRoute = require('./routes/user');
const createjobRoute = require('./routes/createjob');
const app = express();
var corsOptions =
{origin: [
  "http://localhost:4200"
], credentials: true};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/profile", profileRoute);
app.use("/admin",createjobRoute);
app.use("/user", userRoute);

module.exports = app;
