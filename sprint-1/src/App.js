import { Component } from "react";
import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comment from "./components/Comment/Comment";
import CommentList from "./components/CommentList/CommentList";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import recVideos from "./data/videos.json";

const videoList = [...recVideos];
videoList.shift();

class App extends Component {
  state = {
    recommendedVideos: videoList,
    activeVideo: videoDetails[0],
  };

  loadNextVideo = (id) => {
    const featuredVideo = videoDetails.filter((video) => video.id === id);
    const featured = featuredVideo[0];

    const recommendVideos = recVideos.filter((video) => video.id !== id);

    this.setState({
      recommendedVideos: recommendVideos,
      activeVideo: featured,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <HeroVideo activeVideo={this.state.activeVideo} />
        <main>
          <div className='content-container'>
            <VideoInfo activeVideo={this.state.activeVideo} />
            <Comment
              activeVideo={this.state.activeVideo}
              newComment={this.newComment}
            />
            <CommentList activeVideo={this.state.activeVideo} />
          </div>
          <div className='content-recommendation-container'>
            <RecommendedVideos
              videoDetails={this.state.recommendedVideos}
              loadNextVideo={this.loadNextVideo}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
