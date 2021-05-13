import "./VideoInfo.scss";
import Video from "./Video";

function VideoInfo(props) {
  const info = props.videoDetails[0];
  return (
    <section className='video'>
      <Video
        key={info.id}
        title={info.title}
        channel={info.channel}
        timestamp={info.timestamp}
        views={info.views}
        likes={info.likes}
        description={info.description}
      />
    </section>
  );
}

export default VideoInfo;
