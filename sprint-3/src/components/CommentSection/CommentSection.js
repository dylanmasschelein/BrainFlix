import "../CommentForm/CommentForm.scss";
import CommentList from "../CommentList/CommentList";
import { sortedComments } from "../Utilities/DateUtility";
import CommentSubmit from "../CommentSubmit/CommentSubmit";

function CommentSection({ activeVideo, updateComments, handleDelete }) {
  return (
    <div>
      <CommentSubmit
        updateComments={updateComments}
        activeVideo={activeVideo}
      />
      <CommentList
        comments={sortedComments(activeVideo.comments)}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default CommentSection;
