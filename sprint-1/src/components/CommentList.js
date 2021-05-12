import "./CommentList.scss";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const video = props.videoDetails[0].comments;

  return (
    <section>
      {video.map((detail) => (
        <article className='comment-card'>
          <div className='comment-card__avatar'></div>
          <CommentCard
            key={detail.id}
            name={detail.name}
            comment={detail.comment}
            timestamp={detail.timestamp}
          />
        </article>
      ))}
    </section>
  );
}

export default CommentList;
