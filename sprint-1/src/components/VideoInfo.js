import "./VideoInfo.scss";
import Video from "./Video";
import { formatDate } from "./DateUtility";

function VideoInfo(props) {
  const active = props.activeVideo;

  return (
    <section className='video'>
      <Video
        key={active.id}
        title={active.title}
        channel={active.channel}
        timestamp={formatDate(active.timestamp)}
        views={active.views}
        likes={active.likes}
        description={active.description}
      />
    </section>
  );
}

export default VideoInfo;
