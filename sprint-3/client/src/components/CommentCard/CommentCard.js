import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

function CommentCard(props) {
  const {
    name,
    timestamp,
    comment,
    handleDelete,
    id,
    likes,
    handleCommentLike,
  } = props;

  return (
    <div className='comment-card__info-container'>
      <div className='comment-card__heading-wrapper'>
        <div className='comment-card__header'>
          <h3 className='comment-card__username'>
            {name ? name : "Anonymous"}
          </h3>
          <span className='comment-card__date'>{timestamp}</span>
        </div>
        <div>
          <FontAwesomeIcon
            onClick={() => {
              handleDelete(id);
            }}
            className='comment-card__icon comment-card__icon--trash'
            icon={faTrash}
          />
          <FontAwesomeIcon
            onClick={() => {
              handleCommentLike(id);
            }}
            className='comment-card__icon comment-card__icon--heart'
            icon={faHeart}
          />
          <span className='comment-card__likes'>{likes ? likes : "0"}</span>
        </div>
      </div>
      <p className='comment-card__description'>{comment}</p>
    </div>
  );
}

export default CommentCard;
