import "./Header.scss";
import logo from "../../assets/Images/Logo/Logo-brainflix.svg";
import avatar from "../../assets/Images/Icons/Mohan-muruge.jpg";
import plus from "../../assets/Images/Icons/Icon-upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='BrainFlix logo' className='header__logo' />
      </Link>
      <div className='header__wrapper'>
        <input type='text' placeholder='Search' className='header__input' />
        <div className='header__container'>
          <Link to='/upload' className='header__upload'>
            <img src={plus} alt='plus sign svg' className='header__icon' />
            &nbsp; UPLOAD
          </Link>
          <img
            src={avatar}
            alt='avatar placeholder'
            className='header__avatar'
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
