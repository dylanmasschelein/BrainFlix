import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/CommentList/CommentList";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
import recVideos from "../../data/videos.json";
import { v4 as uuid } from "uuid";

const videoList = [...recVideos];
videoList.shift();

class Home extends Component {
  state = {
    recommendedVideos: videoList,
    activeVideo: videoDetails[0],
    comments: videoDetails[0].comments,
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
            <RecommendedVideos
              videoDetails={this.state.recommendedVideos}
              loadNextVideo={this.loadNextVideo}
            />
          </div>
        </main>
        <Switch>
          <Route
            path={this.props.match.url + "/" + this.state.activeVideo.id}
            render={() => <HeroVideo />}
          ></Route>
        </Switch>
      </div>
    );
  }
}
export default Home;
