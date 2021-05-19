import "./RecommendedCard.scss";
import { Link } from "react-router-dom";

function RecommendedCards(props) {
  const { id, image, title, channel } = props;
  return (
    <article className='recommendation-card'>
      <Link to={`/${id}`} className='recommendation__link'>
        <img
          id={id}
          src={image}
          alt={title}
          className='recommendation-card__video'
        />
      </Link>
      <div className='recommendation-card__info-container'>
        <Link to={`/${id}`} className='recommendation__link'>
          <h3 className='recommendation-card__video-title'>{title}</h3>
        </Link>
        <h4 className='recommendation-card__user'>{channel}</h4>
      </div>
    </article>
  );
}

export default RecommendedCards;
