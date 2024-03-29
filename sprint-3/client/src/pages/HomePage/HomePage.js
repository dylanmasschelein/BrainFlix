import { Component } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentSection from "../../components/CommentSection/CommentSection";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import "./HomePage.scss";
import axios from "axios";

class Home extends Component {
  state = {
    activeVideo: null,
  };

  handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  updateComments = () => {
    const { id } = this.state.activeVideo;
    axios
      .get(`${process.env.REACT_APP_SERVER}/videos/${id}`)
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      });
  };

  handleDelete = (commentId) => {
    const { id } = this.state.activeVideo;
    axios
      .delete(
        `${process.env.REACT_APP_SERVER}/videos/${id}/comments/${commentId}`
      )
      .then(() => {
        this.updateComments();
      })
      .catch((err) => console.error(err));
  };

  handleCommentLike = (commentId) => {
    const { id } = this.state.activeVideo;
    axios
      .put(
        `${process.env.REACT_APP_SERVER}/videos/${id}/comments/${commentId}/like`
      )
      .then(() => {
        this.updateComments();
      })
      .catch((err) => console.error(err));
  };

  handleVideoLike = () => {
    console.log("clicked");
    const { id } = this.state.activeVideo;
    axios
      .put(`${process.env.REACT_APP_SERVER}/videos/${id}/like`)
      .then(() => {
        this.updateComments();
      })
      .catch((err) => console.error(err));
  };

  getInitialVideo() {
    const { videoId } = this.props.match.params;
    // Conditionally render initial video based on page refresh or home click
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/videos/${
          videoId === undefined ? "1af0jruup5gu" : videoId
        }`
      )
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getInitialVideo();
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;
    const previousVideoId = prevProps.match.params.videoId;

    // Conditionally render video based on video selection or home click
    if (previousVideoId !== videoId && videoId) {
      axios
        .get(`${process.env.REACT_APP_SERVER}/videos/${videoId}`)
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
          this.handleScroll();
        })
        .catch((err) => console.error(err));
    } else if (prevProps.match.url !== this.props.match.url) {
      this.getInitialVideo();
    }
  }

  render() {
    console.log(process.env);
    if (this.state.activeVideo === null) {
      return <h1>Loading . . .</h1>;
    }
    return (
      <div>
        <HeroVideo activeVideo={this.state.activeVideo} />
        <main>
          <div className='content-container'>
            <VideoInfo
              activeVideo={this.state.activeVideo}
              handleVideoLike={this.handleVideoLike}
            />
            <CommentSection
              updateComments={this.updateComments}
              activeVideo={this.state.activeVideo}
              handleDelete={this.handleDelete}
              handleCommentLike={this.handleCommentLike}
            />
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
