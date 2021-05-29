import viewsIcon from "../../assets/Images/Icons/Icon-views.svg";
import likesIcon from "../../assets/Images/Icons/Icon-likes.svg";

function Video(props) {
  const { title, channel, timestamp, views, likes, description } = props;

  return (
    <>
      <h1 className='video__title'>{title}</h1>
      <div className='video__container'>
        <div className='video__user-container'>
          <h2 className='video__user'>By {channel}</h2>
          <span className='video__date'>{timestamp}</span>
        </div>
        <div className='video__info-container'>
          <span className='video__info'>
            <img src={viewsIcon} alt='views icon' className='video__icon' />
            {views}
          </span>
          <span className='video__info video__info--style'>
            <img src={likesIcon} alt='likes icon' className='video__icon' />
            {likes}
          </span>
        </div>
      </div>
      <p className='video__description'>{description}</p>
    </>
  );
}

export default Video;
