import "./CommentList.scss";
import CommentCard from "../CommentCard/CommentCard";
import { formatDate } from "../Utilities/DateUtility";

function CommentList(props) {
  const videos = props.comments;

  return (
    <section>
      {videos.map((video) => (
        <article key={video.id} className='comment-card'>
          <div className='comment-card__avatar'></div>
          <CommentCard
            id={video.id}
            name={video.name}
            comment={video.comment}
            timestamp={formatDate(video.timestamp)}
            handleDelete={props.handleDelete}
            handleCommentLike={props.handleCommentLike}
            likes={video.likes}
          />
        </article>
      ))}
    </section>
  );
}

export default CommentList;
