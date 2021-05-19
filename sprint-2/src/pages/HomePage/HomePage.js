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
// import axios from "axios";
// const API_KEY = "32e82fff-22c9-41c3-a628-7e5e75bed3bf";

const videoList = [...recVideos];
videoList.shift();

class Home extends Component {
  state = {
    recommendedVideos: videoList,
    activeVideo: videoDetails[0],
    comments: videoDetails[0].comments,
  };

  componentDidMount() {
    const recVid = videoDetails.filter((video) => {
      return video.id !== this.props.match.params.videoId;
    });

    this.setState({
      recommendedVideos: recVid,
    });

    if (this.props.match.params.videoId) {
      const selectedVideo = this.props.match.params.videoId;

      const activeVideo = videoDetails.find(
        (video) => video.id === selectedVideo
      );

      this.setState({
        activeVideo: activeVideo,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, "prevState");
    const { videoId } = this.props.match.params;

    if (prevState.activeVideo.id === videoId) {
      this.setState({
        activeVideo: videoId,
      });
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

  // componentDidMount() {
  //   axios
  //     .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
  //     .then((response) => {
  //       const videoList = response.data;
  //       videoList.shift();
  //       return this.setState({
  //         recommendedVideos: videoList,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // componentDidMount() {
  //   axios
  //     .get(`https://project-2-api.herokuapp.com/videos/${id}api_key=${API_KEY}`)
  //     .then((response) => {
  //       const videoList = response.data;
  //       videoList.shift();
  //       return this.setState({
  //         activeVideo,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

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
