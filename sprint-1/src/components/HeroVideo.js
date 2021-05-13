import "./HeroVideo.scss";

function HeroVideo(props) {
  const video = props.activeVideo;
  // console.log(video);
  return (
    <section className='hero'>
      <video poster={video.image} className='hero__player' controls>
        <source src='' />
      </video>
    </section>
  );
}

export default HeroVideo;
