import { Component } from "react";
import axios from "axios";
const API_KEY = "2ed38889-b920-43b6-ad1f-163b18a7f14e";
const URL = `https://project-2-api.herokuapp.com`;

class CommentForm extends Component {
  state = {
    name: "Active Freddy",
    comment: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${URL}/videos/${this.props.activeVideo.id}/comments?api_key=${API_KEY}`,
        { name: this.state.name, comment: this.state.comment }
      )
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
        <input type='submit' value='COMMENT' className='comment__submit' />
      </form>
    );
  }
}

export default CommentForm;