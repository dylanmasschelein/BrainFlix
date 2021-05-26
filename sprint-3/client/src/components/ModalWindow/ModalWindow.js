import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import './ModalWindow.scss'


function ModalWindow(props) {
  return (
    <div className='modal'>
      <h1 className='modal__title'>{props.text}</h1>
      <div className='modal__redirect'>
        <p className='modal__prompt'>Redirecting you home shortly...</p>
        <FontAwesomeIcon className='modal__icon' icon={faHandPeace} />
      </div>
    </div>
  );
}

export default ModalWindow;
