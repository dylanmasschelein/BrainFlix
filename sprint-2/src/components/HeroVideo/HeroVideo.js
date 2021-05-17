import "./HeroVideo.scss";

function HeroVideo(props) {
  const { image, video } = props.activeVideo;

  return (
    <section className='hero'>
      <video poster={image} className='hero__player' controls>
        <source src={video} />
      </video>
    </section>
  );
}

export default HeroVideo;
