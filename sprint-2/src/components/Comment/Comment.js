import "./Comment.scss";
import avatar from "../../assets/Images/Icons/Mohan-muruge.jpg";

function Comment({ comments, addNewComment }) {
  return (
    <section className='comment'>
      <h3 className='comment__count'>{comments} Comments</h3>
      <div className='comment__wrapper'>
        <img
          src={avatar}
          alt='placeholder avatar'
          className='comment__avatar'
        />
        <form onSubmit={addNewComment} className='comment__form'>
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
