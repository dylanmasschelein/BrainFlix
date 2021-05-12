import "./CommentCard.scss";

function CommentCard() {
  return (
    <article className='comment-card'>
      <div className='comment-card__avatar'></div>
      <div className='comment-card__info-container'>
        <div className='comment-card__header'>
          <h3 className='comment-card__username'>Micheal Lyons</h3>
          <span className='comment-card__date'>02/02/2302</span>
        </div>
        <p className='comment-card__comment'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          blanditiis tempora dicta, quia nesciunt soluta? Cumque blanditiis
          ullam id dolore.
        </p>
      </div>
    </article>
  );
}

export default CommentCard;
