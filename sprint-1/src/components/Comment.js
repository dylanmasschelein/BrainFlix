import "./Comment.scss";
import avatar from "../assets/Images/Icons/Mohan-muruge.jpg";

function Comment(props) {
  const videos = props.videoDetails;
  const commentList = videos
    .filter((video) => video.id === "1af0jruup5gu")
    .map((video) => video.comments)
    .map((comment) => comment.length);

  return (
    <section className='comment'>
      <h2 className='comment__count'>{commentList} Comments</h2>
      <div className='comment__wrapper'>
        <img
          src={avatar}
          alt='placeholder avatar'
          className='comment__avatar'
        />
        <form action='' className='comment__form'>
          <div className='comment__container'>
            <label htmlFor='comment' className='comment__label'>
              JOIN THE CONVERSATION
            </label>
            <textarea
              name='comment'
              id='comment'
              placeholder='Write comment here'
              className='comment__input'
            ></textarea>
          </div>
          <input type='submit' value='COMMENT' className='comment__submit' />
        </form>
      </div>
    </section>
  );
}

export default Comment;
