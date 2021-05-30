import "./RecommendedVideos.scss";
import RecommendedCard from "../RecommendedCard/RecommendedCard";
import { Component } from "react";
import axios from "axios";

class RecommendedVideos extends Component {
  state = {
    recommendedVideos: [],
  };

  getRecommendedVideoList() {
    // Filtering active video out of recommended video list
    axios
      .get(`${process.env.REACT_APP_SERVER}/videos`)
      .then((response) => {
        const recVid = response.data.filter(
          (video) => video.id !== this.props.activeVideo.id
        );
        this.setState({
          recommendedVideos: recVid,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getRecommendedVideoList();
  }

  componentDidUpdate() {
    this.getRecommendedVideoList();
  }

  render() {
    return (
      <section className='recommendation'>
        <h4 className='recommendation__title'>NEXT VIDEO</h4>
        {this.state.recommendedVideos.map((video) => (
          <RecommendedCard
            key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
          />
        ))}
      </section>
    );
  }
}

export default RecommendedVideos;
