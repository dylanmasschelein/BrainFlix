import "./UploadForm.scss";
import { Component } from "react";
import axios from "axios";

const SERVER = "http://localhost:8080";

class UploadForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleVideoAdd = (e) => {
    e.preventDefault();
    console.log("Handling video add");
    console.log(this.state.title, this.state.description);
    axios
      .post(`${SERVER}/videos`, {
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => console.log("Post Successful"))
      .catch((err) => console.error(err));
  };

  isFormValid = () => {
    if (this.state.title === "" || this.state.description === "") {
      return false;
    }
    return true;
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleVideoAdd(e);
          this.props.handlePublish(e);
        }}
        className='upload-video'
      >
        <label htmlFor='title' className='upload-video__label'>
          TITLE YOUR VIDEO
        </label>
        <input
          type='text'
          placeholder='Add a title to your video'
          className='upload-video__input'
          name='title'
          value={this.state.title}
          onChange={this.handleInput}
        />
        <label htmlFor='description' className='upload-video__label'>
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          type='text'
          placeholder='Add a description of your video'
          className='upload-video__input upload-video__input--description'
          name='description'
          value={this.state.description}
          onChange={this.handleInput}
        ></textarea>
        <div className='upload-video__container'>
          <input
            type='submit'
            value='PUBLISH'
            className={
              this.isFormValid()
                ? "upload-video__publish"
                : "upload-video__publish--invalid"
            }
            disabled={!this.isFormValid()}
          />
          <input
            type='cancel'
            value='CANCEL'
            className='upload-video__cancel'
            onClick={this.props.handlePublish}
          />
        </div>
      </form>
    );
  }
}

export default UploadForm;
