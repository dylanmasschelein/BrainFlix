import "./RecommendedCard.scss";

function RecommendedCards(props) {
  const { id, loadNextVideo, image, title, channel } = props;
  return (
    <article className='recommendation-card'>
      <img
        id={id}
        onClick={loadNextVideo}
        src={image}
        alt={title}
        className='recommendation-card__video'
      />
      <div className='recommendation-card__info-container'>
        <h3
          onClick={loadNextVideo}
          className='recommendation-card__video-title'
        >
          {title}
        </h3>
        <h4 className='recommendation-card__user'>{channel}</h4>
      </div>
    </article>
  );
}

export default RecommendedCards;
