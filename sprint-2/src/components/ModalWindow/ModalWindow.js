import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

function ModalWindow(props) {
  return (
    <div className='upload__modal'>
      <h1 className='upload__video'>{props.text}</h1>
      <div className='upload__redirect'>
        <p className='upload__prompt'>Redirecting you home shortly...</p>
        <FontAwesomeIcon className='upload__icon' icon={faHandPeace} />
      </div>
    </div>
  );
}

export default ModalWindow;
