const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function loadVideos() {
  return JSON.parse(fs.readFileSync("./data/videos.json", "utf-8"));
}

function modifyVideo(arr) {
  return fs.writeFileSync("./data/videos.json", JSON.stringify(arr));
}

function addNewVideo(newVideo) {
  const videosData = loadVideos();
  videosData.push(newVideo);
  return fs.writeFileSync("./data/videos.json", JSON.stringify(videosData));
}

router.get("/", (_req, res) => {
  const videosData = loadVideos();
  return res.json(videosData);
});

router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "Mashy",
    image: "http://localhost:8080/static/default-thumbnail.jpg",
    description: description,
    views: "789,379,233",
    likes: "892,003",
    duration: "8:04",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  return res.json(addNewVideo(newVideo));
});

router.get("/:videoId", (req, res) => {
  const videosDataObj = loadVideos();
  const { videoId } = req.params;

  const foundVideo = videosDataObj.find((video) => {
    if (video.id === videoId) {
      return true;
    } else {
      return false;
    }
  });

  if (!foundVideo) {
    return res
      .status(404)
      .json({ message: `Unable to find breed by id ${videoId}` });
  }

  return res.json(foundVideo);
});

router.put("/:videoId/like", (req, res) => {
  const { videoId } = req.params;
  const videoData = loadVideos();

  videoData.find((video) => {
    if (video.id === videoId) {
      const like = video.likes.replace(/,/g, "");
      let videoLikes = parseInt(like);
      const addLike = (videoLikes += 1).toLocaleString("en-us");
      video.likes = addLike;
      return video.likes;
    }
  });

  return res.json(modifyVideo(videoData));
});

module.exports = router;
