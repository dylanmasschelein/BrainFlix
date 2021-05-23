import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          onClick={() => {
            handleDelete(id);
          }}
          className='comment-card__icon'
          icon={faTrash}
        />
      </div>
      <p className='comment-card__description'>{comment}</p>
    </div>
  );
}

export default CommentCard;
