import Form from "../UploadForm/UploadForm";
import "./Upload.scss";
import Thumbnail from "../../assets/Images/Icons/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className='upload'>
      <h1 className='upload__video'>Upload Video</h1>
      <div className='wrapper'>
        <span className='upload__thumbnail-title'>VIDEO THUMBNAIL</span>
        <img
          src={Thumbnail}
          alt='Bike video thumbnail'
          className='upload__thumbnail'
          height='150'
          width='300'
        />
      </div>
      <Form />
    </section>
  );
}

export default Upload;