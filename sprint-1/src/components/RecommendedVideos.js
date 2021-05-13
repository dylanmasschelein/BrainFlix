import "./RecommendedVideos.scss";
import RecommendedCard from "./RecommendedCard";

function RecommendedVideos(props) {
  const videos = props.videoDetails;
  return (
    <section className='recommendation'>
      <h4 className='recommendation__title'>NEXT VIDEO</h4>

      {videos.map((video) => (
        <RecommendedCard
          id={video.id}
          key={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
          loadNextVideo={() => props.loadNextVideo(video.id)}
        />
      ))}
    </section>
  );
}

export default RecommendedVideos;
