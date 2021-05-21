import CommentForm from "../CommentForm/CommentForm";
import "../CommentForm/CommentForm.scss";
import avatar from "../../assets/Images/Icons/Mohan-muruge.jpg";

function Comment({ activeVideo, updateComments }) {
  return (
    <section className='comment'>
      <h3 className='comment__count'>Comments</h3>
      <div className='comment__wrapper'>
        <img
          src={avatar}
          alt='placeholder avatar'
          className='comment__avatar'
        />
        <CommentForm
          updateComments={updateComments}
          activeVideo={activeVideo}
        />
      </div>
    </section>
  );
}

export default Comment;
