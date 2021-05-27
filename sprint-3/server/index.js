const axios = require("axios");
const fs = require("fs");
const express = require("express");
const app = express();
const videoRoutes = require("./routes/videos.js");
const commentRoutes = require("./routes/comments.js");
const cors = require("cors");

app.use(cors());
app.use(express.static("./public"));

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res.status(400).json({
      message: "POST requests must contain content-type=application/json",
    });
  } else {
    next();
  }
});

app.use(express.json());

app.use("/videos", commentRoutes);
app.use("/videos", videoRoutes);

app.listen(8080, () => {
  console.log("Server is listening...");
});
