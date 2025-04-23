import { Link } from 'react-router-dom';

import facebookLogo from '../../assets/images/Footer/facebook_logo.svg';
import gitHubLogo from '../../assets/images/Footer/git_hub_logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; 2025 Supersite, desenvolvido por Pedro Drumond
      </p>
      <ul className='footer__list'>
        <li className='footer__list-item'>
          <Link className='footer__link footer__link-text' to='/'>
            Início
          </Link>
        </li>
        <li className='footer__list-item'>
          <Link
            className='footer__link footer__link-text'
            to='https://tripleten.com/'
            target='_blank'
          >
            TripleTen
          </Link>
        </li>
        <li className='footer__list-item'>
          <Link
            className='footer__link footer__link-icon'
            to='https://github.com/DrumondPedro'
            target='_blank'
          >
            <img className='footer__link-image' src={gitHubLogo} alt='' />
          </Link>
        </li>
        <li className='footer__list-item'>
          <Link
            className='footer__link footer__link-icon'
            to='https://www.facebook.com/tripleten.brasil/?locale=pt_BR'
            target='_blank'
          >
            <img className='footer__link-image' src={facebookLogo} alt='' />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
