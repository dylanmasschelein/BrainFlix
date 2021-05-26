import { Component } from "react";
import axios from "axios";

const API_KEY = "2ed38889-b920-43b6-ad1f-163b18a7f14e";
const URL = `https://project-2-api.herokuapp.com`;

class CommentForm extends Component {
  state = {
    name: "Active Freddy",
    comment: "",
  };

  isCommentValid = () => {
    if (this.state.comment.length < 1) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment } = this.state;
    const { id } = this.props.activeVideo;

    // Adding new comment to active video comment list and clearing field
    axios
      .post(`${URL}/videos/${id}/comments?api_key=${API_KEY}`, {
        name: name,
        comment: comment,
      })
      .then(() => {
        this.props.updateComments();
        this.setState({
          comment: "",
        });
      })
      .catch((err) => console.error(err));
  };

  handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='comment__form'>
        <div className='comment__container'>
          <label htmlFor='comment' className='comment__label'>
            JOIN THE CONVERSATION
          </label>
          <textarea
            name='comment'
            id='comment'
            placeholder='Write comment here'
            className='comment__input'
            value={this.state.comment}
            onChange={this.handleInput}
          ></textarea>
        </div>
        <input
          type='submit'
          value='COMMENT'
          className={
            this.isCommentValid()
              ? "comment__submit"
              : "comment__submit--invalid"
          }
          disabled={!this.isCommentValid()}
        />
      </form>
    );
  }
}

export default CommentForm;
