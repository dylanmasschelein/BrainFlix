const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function loadVideos() {
  return fs.readFileSync("./data/videos.json", "utf-8");
}

// function loadComments(videoId) {
//   const videoData = fs.readFileSync("./data/videos.json", "utf-8");
//   const videoDataParsed = JSON.parse(videoData);
//   const currentVideo = videoDataParsed.filter((video) => {
//     console.log("video id:", video.id, "videoId:", videoId);
//     return video.id === videoId;
//   });
//   return currentVideo[0].comments;
// }

function addComment(newComments) {
  fs.writeFileSync("./data/videos.json", JSON.stringify(newComments));
}

router.post("/:videoId/comments", (req, res) => {
  const { videoId } = req.params;
  const { comment } = req.body;
  // load all video data and seperate out comments of the specific video
  const videoData = JSON.parse(loadVideos());
  let filteredVideo = videoData.filter((video) => video.id === videoId);
  const videoComments = filteredVideo[0].comments;
  const videoList = videoData.filter((video) => video.id !== videoId);
  //   console.log(videoComments);

  if (!comment) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const newComment = {
    id: uuidv4(),
    name: "Goofy Gabe",
    comment,
    date: Date.now(),
  };

  videoComments.push(newComment);
  filteredVideo[0].comments = videoComments;
  videoList.push(filteredVideo);
  //   console.log(videoList);

  // Make a clone of the object
  // extract the comments array
  // Add the comment to the specific comment array
  // push that obj back to the array
  // push the manipulated obj back to the complete data set

  return res.json(addComment(videoList));
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  const { videoId, commentId } = req.params;

  const videoData = JSON.parse(loadVideos());
  let filteredVideo = videoData.filter((video) => video.id === videoId);
  console.log(filteredVideo);
  const videoComments = filteredVideo[0].comments;
  const videoList = videoData.filter((video) => video.id !== videoId);

  //   console.log(videoData);
  //   const filteredVideo = videoData.filter((video) => video.id === videoId);
  //   let videoComments = filteredVideo.comments;
  //   const filteredComments = videoComments.filter(
  //     (comment) => comment.id !== commentId
  //   );
  //   const videoList = videoData.filter((video) => video.id !== videoId);

  videoComments = filteredComments;

  return res.json(addComment(videoComments));
});

module.exports = router;
