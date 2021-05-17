import { Component } from "react";
import Form from "../UploadForm/UploadForm";
import "./Upload.scss";
import Thumbnail from "../../assets/Images/Icons/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    modalOpen: false,
  };

  handlePublish = (e) => {
    e.preventDefault();

    const toggle = !this.state.modalOpen ? true : false;

    this.setState({
      modalOpen: toggle,
    });

    setTimeout(() => {
      this.setState({
        modalOpen: false,
      });
      //redirect
    }, 2000);
  };

  render() {
    return (
      <section className='upload'>
        <div
          className={
            !this.state.modalOpen ? "upload__modal--hidden" : "upload__modal"
          }
        >
          <h1 className='upload__video'>Upload Successful!</h1>
          <p className='upload__prompt'>Redirecting you home shortly...</p>
        </div>
        <h1 className='upload__video'>Upload Video</h1>
        <div className='wrapper'>
          <span className='upload__thumbnail-title'>VIDEO THUMBNAIL</span>
          <img
            src={Thumbnail}
            alt='Bike video thumbnail'
            className='upload__thumbnail'
          />
        </div>
        <Form handlePublish={this.handlePublish} />
      </section>
    );
  }
}

export default Upload;
