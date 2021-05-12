import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import CommentList from "./components/CommentList";
import RecommendedVideos from "./components/RecommendedVideos";
import RecommendedCards from "./components/RecommendedCard";
import "./App.scss";

import videoDetails from "./data/video-details.json";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroVideo />
      <main>
        <div className='content-container'>
          <VideoInfo videoDetails={videoDetails} />
          <Comment />
          <CommentList videoDetails={videoDetails} />
        </div>
        <div className='content-recommendation-container'>
          <RecommendedVideos />
          <RecommendedCards />
        </div>
      </main>
    </div>
  );
}

export default App;
