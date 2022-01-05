const express = require("express");
const morgan = require("morgan");
const app = express();

//global middleware
// app.use((req, res, next) => {
//   const start = performance.now();
//   console.log(performance.now() - start);
//   next();
// });
//Logging with Morgan
app.use(morgan("short"));

//Routing
app.use("/", require("./routes/main"));
app.use("/user", require("./routes/users"));
app.use("/weather", require("./routes/weather"));

app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
