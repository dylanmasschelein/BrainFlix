import "./CommentList.scss";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const videos = props.activeVideo.comments;

  return (
    <section>
      {videos.map((video) => (
        <article key={video.id} className='comment-card'>
          <div className='comment-card__avatar'></div>
          <CommentCard
            name={video.name}
            comment={video.comment}
            timestamp={video.timestamp}
          />
        </article>
      ))}
    </section>
  );
}

export default CommentList;
