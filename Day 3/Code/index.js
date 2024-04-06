const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./routes/fruits");
const errorHandler = require("./middlewares/errorHandler");

///Router middleware
app.use("/fruits", fruits);

/// Set View Engine
app.set("view engine", "ejs");

///Body Parser Middleware
app.use(express.json());

/// Routes
app
  .get("/", (req, res) => {
    res.send(`Received GET request at '/' and port '${port}'`);
  })
  .put("/", (req, res) => {
    res.send(`Received PUT request at '/' and port '${port}'`);
  })
  .post("/", (req, res) => {
    res.send(`Received POST request at '/' and port '${port}'`);
  })
  .delete("/", (req, res) => {
    res.send(`Received DELETE request at '/' and port '${port}'`);
  });

/// Response Download file
app.get("/download", (req, res) => {
  res.download("package.json");
});

///Response Render
app.get("/home", (req, res) => {
  res.render("home", { name: "Express", email: "something@gmail.com" });
});

///Request Query Params
app.get("/user", (req, res) => {
  res.end(
    `Request recieved with name ${req.query.name} and email ${req.query.email}`
  );
});

///Request Body
app.get("/view", (req, res) => {
  console.log(req.body);
  res.send(`Name is ${req.body.name} and ${req.body.shortDesc}`);
});

///Request Header
app.get("/auth", (req, res) => {
  // Header::Host Name
  //   res.send(req.headers.host);
  // if (req.headers.host === "localhost:3000") {
  //   res.send("Hello from localhost");
  // } else {
  //   res.send("Hello from other host");
  // }

  /// Request Header::User Token
  if (req.headers.usertoken === "$user$1234") {
    res.send("User is authenticated");
  } else {
    // res.send("User is not authenticated");
    throw new Error(510);
  }
});

//Error
app.get("/error", (req, res) => {
  throw new Error(509);
});

///Error Handler Middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
