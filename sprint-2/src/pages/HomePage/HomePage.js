import { Component } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import CommentList from "../../components/CommentList/CommentList";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
// import recVideos from "../../data/videos.json";
import { v4 as uuid } from "uuid";
import axios from "axios";
const API_KEY = "32e82fff-22c9-41c3-a628-7e5e75bed3bf";
const URL = `  https://project-2-api.herokuapp.com`;

class Home extends Component {
  state = {
    activeVideo: null,
    comments: videoDetails[0].comments,
  };

  componentDidMount() {
    axios
      .get(`${URL}/videos/1af0jruup5gu?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidUpdate() {
    axios
      .get(
        `${URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`
      )
      .then((response) => {
        this.setState({ activeVideo: response.data });
      })
      .catch((err) => console.log(err));
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
    if (this.state.activeVideo === null) {
      return <h1>something</h1>;
    }
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
            <RecommendedVideos activeVideo={this.state.activeVideo} />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
