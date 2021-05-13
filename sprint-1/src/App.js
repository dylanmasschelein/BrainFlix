import { Component } from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import CommentList from "./components/CommentList";
import RecommendedVideos from "./components/RecommendedVideos";
import Lodash from "lodash";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import recVideos from "./data/videos.json";

const videoList = Lodash.cloneDeep(videoDetails);
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
      videos: videoDetails,
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
            <Comment />
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

// function App() {

//   return (
//     <div className='App'>
//       <Header />
//       <HeroVideo />
//       <main>
//         <div className='content-container'>
//           <VideoInfo videoDetails={videoDetails} />
//           <Comment videoDetails={videoDetails} />
//           <CommentList videoDetails={videoDetails} />
//         </div>
//         <div className='content-recommendation-container'>
//           <RecommendedVideos videoDetails={videoDetails} />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
