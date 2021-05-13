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
import recVideo from "./data/videos.json";
const videoList = Lodash.cloneDeep(videoDetails);
videoList.shift();
// console.log(videoList);
class App extends Component {
  state = {
    recommendedVideos: videoList,
    videos: videoDetails, // remove initial featured video from this array first ***********************
    activeVideo: videoDetails[0],
  };

  loadNextVideo = (e) => {
    //input the id
    const clickedVideoID = e.target.id;

    // filtering out clicked video and adding it as the new active state
    const featuredVideo = this.state.videos.filter(
      (video) => video.id === clickedVideoID
    );
    const featured = featuredVideo[0];
    // filtering out the clicked video and setting state to the remaining
    const recommendVideos = this.state.videos.filter(
      (video) => video.id !== clickedVideoID
    );
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
