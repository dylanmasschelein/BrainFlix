import "./VideoInfo.scss";
import viewsIcon from "../assets/Images/Icons/Icon-views.svg";
import likesIcon from "../assets/Images/Icons/Icon-likes.svg";

function VideoInfo() {
  return (
    <section className='video'>
      <h1 className='video__title'>BMX Rampage: 2018 Highlights</h1>
      <div className='video__container'>
        <div className='video__user-container'>
          <h2 className='video__user'>By Red Cow</h2>
          <span className='video__date'>12/18/2018</span>
        </div>
        <div className='video__info-container'>
          <span className='video__info'>
            <img src={viewsIcon} alt='views icon' className='video__icon' />
            1,000,023
          </span>
          <span className='video__info'>
            <img src={likesIcon} alt='likes icon' className='video__icon' />
            110,985
          </span>
        </div>
      </div>
      <p className='video__description'>
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </section>
  );
}

export default VideoInfo;
