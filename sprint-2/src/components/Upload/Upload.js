import { Component } from "react";
import Form from "../UploadForm/UploadForm";
import "./Upload.scss";
import Thumbnail from "../../assets/Images/Icons/Upload-video-preview.jpg";

class Upload extends Component {
  render() {
    return (
      <div className='wrapper'>
        <section className='upload'>
          <h1 className='upload__video'>Upload Video</h1>
          <span className='upload__thumbnail-title'>VIDEO THUMBNAIL</span>
          <img
            src={Thumbnail}
            alt='Bike video thumbnail'
            className='upload__thumbnail'
            height='150'
            width='300'
          />
        </section>
        <Form />
      </div>
    );
  }
}

export default Upload;
