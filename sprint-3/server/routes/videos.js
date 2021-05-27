const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function loadVideos() {
  return fs.readFileSync("./data/videos.json", "utf-8");
}

const videosData = loadVideos();

function addNewVideo(newVideo) {
  const videosData = JSON.parse(loadVideos());
  videosData.push(newVideo);

  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData));
}

router
  .route("/")
  .get((_req, res) => {
    return res.json(videosData);
  })
  .post((req, res) => {
    const { name, comment } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    if (!comment) {
      return res.status(400).json({
        message: "Comment is required",
      });
    }

    const newVideo = {
      id: uuidv4(),
      title: "Dylan's big day at the beach",
      channel: "Mashy",
      image: "https://i.imgur.com/l2Xfgpl.jpg",
      description:
        "Took a long bike ride down to the beach to build sandcastles and splash around in the water",
      views: "789,379,233",
      likes: "892,003",
      duration: "8:04",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1545162149000,
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046,
        },
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046,
        },
      ],
    };

    return res.json(addNewVideo(newVideo));
  });

router.get("/:videoId", (req, res) => {
  const videosDataObj = JSON.parse(videosData);
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
      .json({ message: `Unable to find breed by id ${id}` });
  }

  return res.json(foundVideo);
});

module.exports = router;
