import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import CommentCard from "./components/CommentCard";
import RecommendedVideos from "./components/RecommendedVideos";
import RecommendedCards from "./components/RecommendedCard";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroVideo />
      <main>
        <div className='content-container'>
          <VideoInfo />
          <Comment />
          <CommentCard />
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
