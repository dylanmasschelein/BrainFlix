function CommentCard(props) {
  const { name, timestamp, comment } = props;
  return (
    <div className='comment-card__info-container'>
      <div className='comment-card__header'>
        <h3 className='comment-card__username'>{name}</h3>
        <span className='comment-card__date'>{timestamp}</span>
      </div>
      <p>{comment}</p>
    </div>
  );
}

export default CommentCard;
