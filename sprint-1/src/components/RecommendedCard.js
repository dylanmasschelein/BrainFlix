import "./RecommendedCard.scss";

function RecommendedCards() {
  return (
    <article className='recommendation-card'>
      <video className='recommendation-card__video'>
        <source src='https://project-2-api.herokuapp.com/stream' />
      </video>
      <div className='recommendation-card__info-container'>
        <h3 className='recommendation-card__video-title'>
          Lorem ipsum dolor sit amet.
        </h3>
        <h4 className='recommendation-card__user'>Lorem, ipsum.</h4>
      </div>
    </article>
  );
}

export default RecommendedCards;
