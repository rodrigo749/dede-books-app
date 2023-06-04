import logo from '../../imagens/logo.svg';
import './styles.css';

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Dedé books</strong></p>
       </div>
    )
}

export default Logo;