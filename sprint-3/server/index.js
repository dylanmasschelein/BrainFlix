const express = require("express");
const app = express();
const cors = require("cors");

const videoRoutes = require("./routes/videos.js");
const commentRoutes = require("./routes/comments.js");

require("dotenv").config();
const port = process.env.PORT || 9000;

app.use(cors());

app.use("/static", express.static("public"));

// Validating POST request is recieving json
app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json;charset=UTF-8"
  ) {
    return res.status(400).json({
      message:
        "POST requests must contain content-type=application/json;charset=UTF-8",
    });
  } else {
    next();
  }
});

app.use(express.json());

app.use("/videos", commentRoutes);
app.use("/videos", videoRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
