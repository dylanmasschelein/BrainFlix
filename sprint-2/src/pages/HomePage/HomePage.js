import { Component } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentSection from "../../components/CommentSection/CommentSection";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import "./HomePage.scss";
import axios from "axios";
const API_KEY = "2ed38889-b920-43b6-ad1f-163b18a7f14e";
const URL = `https://project-2-api.herokuapp.com`;

class Home extends Component {
  state = {
    activeVideo: null,
  };

  //short circut component did mount request with the initial video and if it is changing then display that video

  updateComments = () => {
    axios
      .get(`${URL}/videos/${this.state.activeVideo.id}?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      });
  };

  getInitialVideo() {
    if (this.props.match.params.videoId === undefined) {
      axios
        .get(`${URL}/videos/1af0jruup5gu?api_key=${API_KEY}`)
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .get(
          `${URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`
        )
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
        });
    }
    //ADD CONDITIONAL IN HERE TO RENDER THE INITIA;L VIDEO, OR WHATEVER MATCH.PARAM.VIDEO ID IS IN THE URL
  }

  componentDidMount() {
    this.getInitialVideo();
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;
    const previousVideoId = prevProps.match.params.videoId;
    if (previousVideoId !== videoId && videoId) {
      axios
        .get(
          `${URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`
        )
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
        })
        .catch((err) => console.log(err));
    } else if (prevProps.match.url !== this.props.match.url) {
      this.getInitialVideo();
    }
  }
  //with router -- look into

  render() {
    console.log(this.props.match.params.videoId);
    if (this.state.activeVideo === null) {
      return <h1>something</h1>;
    }
    return (
      <div>
        <HeroVideo activeVideo={this.state.activeVideo} />
        <main>
          <div className='content-container'>
            <VideoInfo activeVideo={this.state.activeVideo} />
            <CommentSection
              updateComments={this.updateComments}
              activeVideo={this.state.activeVideo}
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
