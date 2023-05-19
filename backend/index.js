require("dotenv").config();
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const route = require('./routes/userRoute');
const crudRoutes = require("./routes/articleRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// database connection
connection();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//Configuring cookie-parser
app.use(cookieParser()); 
app.use("/uploads", express.static("uploads"));
//Using routes
app.use('/api', route);

//Using routes
app.use("/api/cruds", crudRoutes);

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
