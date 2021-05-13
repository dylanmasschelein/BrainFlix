function CommentCard(props) {
  return (
    <div className='comment-card__info-container'>
      <div className='comment-card__header'>
        <h3 className='comment-card__username'>{props.name}</h3>
        <span className='comment-card__date'>{props.timestamp}</span>
      </div>
      <p className='comment-card__comment'>{props.comment}</p>
    </div>
  );
}

export default CommentCard;
