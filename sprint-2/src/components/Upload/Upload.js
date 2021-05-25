import { Component } from "react";
import Form from "../UploadForm/UploadForm";
import "./Upload.scss";
import Thumbnail from "../../assets/Images/Icons/Upload-video-preview.jpg";
import ModalWindow from "../ModalWindow/ModalWindow";

class Upload extends Component {
  state = {
    modalOpen: false,
    text: "",
  };

  handlePublish = (e) => {
    e.preventDefault();

    // Conditionally applying text based on button selection (cancel/publish)
    const buttonClicked =
      e.target.className === "upload-video"
        ? "Upload Successful!"
        : "Upload Cancelled. . .";

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Toggle modal window on and off
    const toggle = !this.state.modalOpen ? true : false;

    this.setState({
      modalOpen: toggle,
      text: buttonClicked,
    });

    setTimeout(() => {
      this.setState({
        modalOpen: toggle,
        text: "",
      });

      this.props.history.push("/");
    }, 2000);
  };

  render() {
    return (
      <section className='upload'>
        <div className='upload__modal-container'>
          {this.state.modalOpen ? <ModalWindow text={this.state.text} /> : ""}
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
