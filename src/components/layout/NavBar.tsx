import { Link } from 'react-router-dom';
import './header.css';

const NavBar = () => {

    return  <header>
            <div>
                <div >
                    <h2>JeliBank</h2>
                    <div className='image-navbar'>
                    <img src= "./images/JeliBank.png"/>
                    </div>
                    
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>                        
                    </ul>
                </nav>
            </div>
    </header>
}

export default NavBar;