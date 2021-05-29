import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

function CommentCard(props) {
  const { name, timestamp, comment, handleDelete, id } = props;

  return (
    <div className='comment-card__info-container'>
      <div className='comment-card__heading-wrapper'>
        <div className='comment-card__header'>
          <h3 className='comment-card__username'>
            {name ? name : "Anonymous"}
          </h3>
          <span className='comment-card__date'>{timestamp}</span>
        </div>
        <div className='comment-card__icon-container'>
          <FontAwesomeIcon
            onClick={() => {
              handleDelete(id);
            }}
            className='comment-card__icon comment-card__icon--trash'
            icon={faTrash}
          />
          <FontAwesomeIcon
            onClick={() => {
              handleLike(id);
            }}
            className='comment-card__icon'
            icon={faHeart}
          />
        </div>
      </div>
      <p className='comment-card__description'>{comment}</p>
    </div>
  );
}

export default CommentCard;
