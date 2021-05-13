import viewsIcon from "../assets/Images/Icons/Icon-views.svg";
import likesIcon from "../assets/Images/Icons/Icon-likes.svg";

function Video(props) {
  return (
    <>
      <h1 className='video__title'>{props.title}</h1>
      <div className='video__container'>
        <div className='video__user-container'>
          <h2 className='video__user'>{props.channel}</h2>
          <span className='video__date'>{props.timestamp}</span>
        </div>
        <div className='video__info-container'>
          <span className='video__info'>
            <img src={viewsIcon} alt='views icon' className='video__icon' />
            {props.views}
          </span>
          <span className='video__info'>
            <img src={likesIcon} alt='likes icon' className='video__icon' />
            {props.likes}
          </span>
        </div>
      </div>
      <p className='video__description'>{props.description}</p>
    </>
  );
}

export default Video;
