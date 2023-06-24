import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from '../Content/Home/Home';
import Topics from '../Content/About/About';
import Contact from '../Content/Resume/Resume';
const Header = () => {
    return(
    <header id="header">
        <p id="logo-text">Saebastion's Website</p>
        <ul id="nav">
            <li><Link className="text-link" to='/'>Home</Link></li>
            <li><Link className="text-link" to='/about'>About</Link></li>
            <li><Link className="text-link" to ='/gallery'>Gallery</Link></li>
            <li><Link className="text-link" to='/tournament'>Tournament</Link></li>


        </ul>
    </header>
);
}
export default Header;