import { ReactComponent as PersonIcon } from 'assets/img/person.svg';
import './Navbar.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <div className="dsmovie-contact-container">
                        <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" rel="noreferrer">
                            <p className="dsmovie-contact-link">Gabriel</p>
                        </a>
                        <a href="https://github.com/Biellms/DevSuperior-Movie" target="_blank" rel="noreferrer">
                           <PersonIcon className='personIcon'/>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;