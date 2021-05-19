import { Component } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/CommentList/CommentList";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
import recVideos from "../../data/videos.json";
import { v4 as uuid } from "uuid";
import axios from "axios";
const API_KEY = "32e82fff-22c9-41c3-a628-7e5e75bed3bf";
const URL = `  https://project-2-api.herokuapp.com`;

const videoList = [...recVideos];
videoList.shift();

class Home extends Component {
  state = {
    recommendedVideos: [],
    activeVideo: videoDetails[0],
    comments: videoDetails[0].comments,
  };

  getVideoData() {
    axios
      .get(`${URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        const recVid = response.data.filter(
          (video) => video.id !== this.state.activeVideo.id
        );
        this.setState({
          recommendedVideos: recVid,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getVideoData();
  }

  getFeaturedVideo() {
    axios
      .get(
        `${URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`
      )
      .then((response) => {
        const featuredVideo = response.data;
        const recVid = recVideos.filter((video) => {
          return video.id !== featuredVideo.id;
        });
        this.setState({
          activeVideo: featuredVideo,
          recommendedVideos: recVid,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;

    if (prevProps.match.params.videoId !== videoId && videoId) {
      this.getFeaturedVideo();
    }
  }

  addNewComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    const comment = {
      name: "",
      id: uuid(),
      likes: 0,
      comment: newComment,
      timestamp: Date.now(),
    };

    this.setState({
      comments: this.state.comments.concat(comment),
    });

    e.target.reset();
  };

  render() {
    return (
      <div>
        <HeroVideo activeVideo={this.state.activeVideo} />
        <main>
          <div className='content-container'>
            <VideoInfo activeVideo={this.state.activeVideo} />
            <Comment
              activeVideo={this.state.activeVideo}
              addNewComment={this.addNewComment}
            />
            <CommentList activeComments={this.state.comments} />
          </div>
          <div className='content-recommendation-container'>
            <RecommendedVideos videoDetails={this.state.recommendedVideos} />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
