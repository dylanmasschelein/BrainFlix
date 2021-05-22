import { Component } from "react";
import Form from "../UploadForm/UploadForm";
import "./Upload.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import Thumbnail from "../../assets/Images/Icons/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    modalOpen: false,
  };

  handlePublish = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const toggle = !this.state.modalOpen ? true : false;

    this.setState({
      modalOpen: toggle,
    });

    setTimeout(() => {
      this.setState({
        modalOpen: false,
      });

      this.props.history.push("/");
    }, 2000);
  };

  render() {
    console.log(window.pageYOffset);

    return (
      <section className='upload'>
        <div className='upload__modal-container'>
          <div
            className={
              !this.state.modalOpen ? "upload__modal--hidden" : "upload__modal"
            }
          >
            <h1 className='upload__video'>Upload Successful!</h1>
            <div className='upload__redirect'>
              <p className='upload__prompt'>Redirecting you home shortly...</p>
              <FontAwesomeIcon className='upload__icon' icon={faHandPeace} />
            </div>
          </div>
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
