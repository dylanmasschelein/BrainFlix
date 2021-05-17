function UploadForm() {
  return (
    <form action='' className='upload-video'>
      <label for='title' className='upload-video__label'>
        TITLE YOUR VIDEO
      </label>
      <input
        type='text'
        placeholder='Add a title to your video'
        className='upload-video__input'
      />
      <label for='' className='upload-video__label'>
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        type='text'
        placeholder='Add a description of your video'
        className='upload-video__input upload-video__input--description'
      ></textarea>
      <div className='upload-video__container'>
        <input
          type='submit'
          value='PUBLISH'
          className='upload-video__publish'
        />
        <input type='cancel' value='CANCEL' className='upload-video__cancel' />
      </div>
    </form>
  );
}

export default UploadForm;
