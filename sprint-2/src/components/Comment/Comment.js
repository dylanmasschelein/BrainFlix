import CommentForm from "../CommentForm/CommentForm";
import "../CommentForm/CommentForm.scss";

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
        <CommentForm />
      </div>
    </section>
  );
}
