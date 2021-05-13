import { Component } from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import CommentList from "./components/CommentList";
import RecommendedVideos from "./components/RecommendedVideos";
import "./App.scss";

import videoDetails from "./data/video-details.json";

class App extends Component {
  state = {
    videos: videoDetails,
    activeVideo: videoDetails[0],
  };

  loadNextVideo = (e) => {
    // const upNext = [];
    const clickedVideoID = e.target.id;
    // const featured = [];
    const featuredVideo = this.state.videos.filter(
      (video) => video.id === clickedVideoID
    );
    // console.log(featuredVideo);
    const recommendedVideos = this.state.videos.filter(
      (video) => video.id !== clickedVideoID
    );
    console.log(recommendedVideos);
    console.log(featuredVideo);
    console.log(this.state);
    // console.log(this.state);
    this.setState({
      videos: recommendedVideos,
      activeVideo: featuredVideo,
    });

    console.log(this.state);

    // this.state.videos.map((video) => {
    //   if (clickedVideoID === this.state.activeVideo) {
    //     featured.push(clickedVideoID);
    //   } else if (clickedVideoID !== this.state.activeVideo) {
    //     upNext.push(video);
    //   }
    // });
    // console.log(clickedVideoID);
    // console.log(featured);
    // console.log(clickedVideoID !== this.state.activeVideo);
    // this.setState({
    //   videos: upNext,
    //   activeVideo: featured,
    // });
    // console.log(upNext);
    // console.log(this.state.activeVideo);
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <HeroVideo />
        <main>
          <div className='content-container'>
            <VideoInfo videoDetails={videoDetails} />
            <Comment videoDetails={videoDetails} />
            <CommentList activeVideo={this.state.activeVideo} />
          </div>
          <div className='content-recommendation-container'>
            <RecommendedVideos
              videoDetails={videoDetails}
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
