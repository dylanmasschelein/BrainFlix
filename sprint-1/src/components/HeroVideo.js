import "./HeroVideo.scss";

function HeroVideo() {
  return (
    <section className='hero'>
      <video className='hero__player' controls>
        <source src='' />
      </video>
    </section>
  );
}

export default HeroVideo;
