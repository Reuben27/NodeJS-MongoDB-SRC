const path = require('path');
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set ("view engine", "ejs");

app.use(express.json());
app.use(methodOverride("_method"));

// Router Middlewares
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

// Server http://localhost:3000/
app.listen(process.env.PORT || 3000, function () {
  console.log("app is running...")
});