import { Component } from "react";
import "../CommentForm/CommentForm.scss";
import CommentList from "../CommentList/CommentList";
// import avatar from "../../assets/Images/Icons/Mohan-muruge.jpg";
// import CommentForm from "../CommentForm/CommentForm";
import CommentSubmit from "../CommentSubmit/CommentSubmit";
import axios from "axios";
const API_KEY = "2ed38889-b920-43b6-ad1f-163b18a7f14e";
const URL = `https://project-2-api.herokuapp.com`;

function CommentSection({ activeVideo, updateComments }) {
  return (
    <div>
      <CommentSubmit
        updateComments={updateComments}
        activeVideo={activeVideo}
      />
      <CommentList comments={activeVideo.comments} />
    </div>
  );
}

export default CommentSection;

// class CommentSection extends Component {
//   state = {
//     comments: this.props.activeVideo.comments,
//     name: "Active Freddy",
//     comment: "",
//   };

// handleSubmit = (e) => {
//   e.preventDefault();
//   axios
//     .post(
//       `${URL}/videos/${this.props.activeVideo.id}/comments?api_key=${API_KEY}`,
//       { name: this.state.name, comment: this.state.comment }
//     )
//     .then((response) => {
//       this.setState({
//         comments: [...this.state.comments, response.data],
//       });
//       axios
//         .get(`${URL}/videos/${this.props.activeVideo.id}?api_key=${API_KEY}`)
//         .then((response) => {
//           this.setState({
//             comments: response.data.comments,
//           });
//         });
//     })
//     .catch((err) => console.error(err));
// };

//   handleInput = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <section className='comment'>
//           <h3 className='comment__count'>Comments</h3>
//           <div className='comment__wrapper'>
//             <img
//               src={avatar}
//               alt='placeholder avatar'
//               className='comment__avatar'
//             />
//             <form onSubmit={this.handleSubmit} className='comment__form'>
//               <div className='comment__container'>
//                 <label htmlFor='comment' className='comment__label'>
//                   JOIN THE CONVERSATION
//                 </label>
//                 <textarea
//                   name='comment'
//                   id='comment'
//                   placeholder='Write comment here'
//                   className='comment__input'
//                   value={this.state.comment}
//                   onChange={this.handleInput}
//                 ></textarea>
//               </div>
//               <input
//                 type='submit'
//                 value='COMMENT'
//                 className='comment__submit'
//               />
//             </form>
//           </div>
//         </section>
//         <CommentList comments={this.state.comments} />
//       </div>
//     );
//   }
// }

// export default CommentSection;
