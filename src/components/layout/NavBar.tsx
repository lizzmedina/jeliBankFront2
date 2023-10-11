import { Link } from 'react-router-dom';
import './header.css';

const NavBar = () => {

    return  (
            <div className='container-general'>
                <div className='container-1'>
                    <h2>JeliBank</h2>
                    <div className='image-navbar'>
                    <img src= "./images/JeliBank.png"/>
                    </div>
                    
                </div>
                <nav className='container-nav'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>                        
                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;