import "./HeroVideo.scss";

function HeroVideo() {
  return (
    <section className='hero'>
      <video className='hero__player' controls>
        <source src='https://project-2-api.herokuapp.com/stream' />
      </video>
    </section>
  );
}

export default HeroVideo;
