const serverless = require("serverless-http");
const express = require("express");
const app = express();


const router = require('./router/router')

app.use(router)

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});


exports.handler = serverless(app);
