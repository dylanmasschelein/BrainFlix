import "./UploadForm.scss";
import { Component } from "react";

class UploadForm extends Component {
  state = {
    title: "",
    comment: "",
  };

  isFormValid = () => {
    if (this.state.title === "" || this.state.comment === "") {
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
        <form onSubmit={this.props.handlePublish} className='upload-video'>
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
            name='comment'
            value={this.state.comment}
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
