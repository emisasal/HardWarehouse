const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const { resolve } = require("path");
require("dotenv").config({ path: resolve(__dirname, "../.env") });


const passport = require("./config/passport");
const routes = require("./routes");
const { SERVER_PORT, SESSION_SECRET, MONGO_URI } = process.env;
require("./db");

const app = express();

const sessionStore = MongoStore.create({
  mongoUrl: MONGO_URI,
  collection: "sessions",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  })
);

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.listen(SERVER_PORT, () => {
  console.log(`Server's listening on Port: ${SERVER_PORT}`);
});
