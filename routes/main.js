const express = require("express");
const router = express.Router();

//local middleware
const localMiddleWare = (_req, _res, next) => {
  console.log("Local: POST");
  next();
};

router.get("/", (_req, res) => {
  res.send("Hello Node!");
});

router.post("/", localMiddleWare, function (_req, res) {
  res.send("Got a POST request");
});

module.exports = router;
