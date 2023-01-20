const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const https = require("https");
const fs = require("fs");

const helmet = require('helmet');
var cors = require('cors');
var chalk = require('chalk');
const { success, error, info } = require('consola');


//log-handlers modules
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const db = require('./config/database');


//configuration
const PORT = process.env.PORT || 5000;
var ENV = (PORT == 5000) ? 'DEVELOPMENT' : 'STAGING';

//color configuration
var portInfo = chalk.bold.green;
var envInfo = chalk.bold.blue;
var border = chalk.bold.yellow;

//configuring body parser
var bodyParserJSON = bodyParser.json();
var bodyParseUrlEncoded = bodyParser.urlencoded({ extended: true });

//handling cors
var corsOptions = {
  optionsSuccessStatus: 200
}

const app = express();

app.use(helmet());

//const router = express.Router();

//importing the routers
const rolesRouter = require("./routes/role");
const usersRouter = require("./routes/user");
const positionsRouter = require("./routes/position");
const departmentRouter = require("./routes/department");
const staffRouter = require("./routes/staff");
const collegeRouter = require("./routes/college");
const imageRouter = require("./routes/image");
const mailRouter = require("./routes/mail");

//configuring the app.use middlewares
//app.use(cors(corsOptions));
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParseUrlEncoded);
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // res.setHeader('Access-Control-Allow-Credentials', true)
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js!')
});

//calling the routers
app.use("/api/roles", rolesRouter);
app.use("/api/users", usersRouter);
app.use("/api/positions", positionsRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/staff", staffRouter);
app.use("/api/college", collegeRouter);
app.use("/api/images", imageRouter);
app.use("/api/mail", mailRouter);

//calling the database
db();

//for local development (localhost)
app.listen(PORT, () => {
    success({ message: "Server running on PORT: 5000", badge: true });
});

/*
//for remote server
const options = {
  key:fs.readFileSync('/etc/letsencrypt/live/coictfms.kelvinkedyson.com/privkey.pem'),
  cert:fs.readFileSync('/etc/letsencrypt/live/coictfms.kelvinkedyson.com/fullchain.pem')
}

//starting the remote server
https.createServer(options, app).listen(5000, () => {
    success({ message: "Server running on PORT: 5000", badge: true });
});
*/







/**
 @todo
 all cors to be handled by backend
 app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Authorization"
  );
  // res.setHeader('Access-Control-Allow-Credentials', true)
  next();
});
 */