import "./RecommendedVideos.scss";
import RecommendedCard from "../RecommendedCard/RecommendedCard";

function RecommendedVideos(props) {
  const videos = props.videoDetails;

  return (
    <section className='recommendation'>
      <h4 className='recommendation__title'>NEXT VIDEO</h4>

      {videos.map((video) => (
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

export default RecommendedVideos;
