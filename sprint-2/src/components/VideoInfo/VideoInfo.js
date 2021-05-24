import "./VideoInfo.scss";
import Video from "../Video/Video";
import { formatDate } from "../Utilities/DateUtility";

function VideoInfo(props) {
  const { id, title, channel, timestamp, views, likes, description } =
    props.activeVideo;
    
  return (
    <section className='video'>
      <Video
        key={id}
        title={title}
        channel={channel}
        timestamp={formatDate(timestamp)}
        views={views}
        likes={likes}
        description={description}
      />
    </section>
  );
}

export default VideoInfo;
