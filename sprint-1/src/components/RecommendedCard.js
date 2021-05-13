import "./RecommendedCard.scss";

function RecommendedCards(props) {
  return (
    <article className='recommendation-card'>
      <img
        id={props.id}
        onClick={props.loadNextVideo}
        src={props.image}
        alt={props.title}
        className='recommendation-card__video'
      />
      <div className='recommendation-card__info-container'>
        <h3 className='recommendation-card__video-title'>{props.title}</h3>
        <h4 className='recommendation-card__user'>{props.channel}</h4>
      </div>
    </article>
  );
}

export default RecommendedCards;
