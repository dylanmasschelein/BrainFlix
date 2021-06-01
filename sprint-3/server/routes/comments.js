const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function loadVideos() {
  return JSON.parse(fs.readFileSync("./data/videos.json", "utf-8"));
}

function modifyComments(arr) {
  return fs.writeFileSync("./data/videos.json", JSON.stringify(arr));
}

router.post("/:videoId/comments", (req, res) => {
  const { videoId } = req.params;
  const { comment } = req.body;
  const videoData = loadVideos();

  if (!comment) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const newComment = {
    id: uuidv4(),
    name: "Goofy Gabe",
    comment,
    timestamp: Date.now(),
  };

  videoData.find((video) => {
    if (video.id === videoId) {
      return video.comments.push(newComment);
    }
  });

  return res.json(modifyComments(videoData));
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  const { videoId, commentId } = req.params;
  const videoData = loadVideos();

  videoData.find((video) => {
    if (video.id === videoId) {
      const deleteIndex = video.comments.findIndex(
        (comment) => comment.id === commentId
      );
      video.comments.splice(deleteIndex, 1);
    }
  });

  return res.json(modifyComments(videoData));
});

router.put("/:videoId/comments/:commentId/like", (req, res) => {
  const { videoId, commentId } = req.params;
  const videoData = loadVideos();

  videoData.find((video) => {
    if (video.id === videoId) {
      video.comments.findIndex((comment) => {
        if (comment.id === commentId) {
          comment.likes += 1;
        }
      });
    }
  });
  return res.json(modifyComments(videoData));
});

module.exports = router;
