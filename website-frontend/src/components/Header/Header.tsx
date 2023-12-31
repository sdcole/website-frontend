import '../../App.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return(
    <header id="header">
        <p id="logo-text">Saebastion's Website</p>
        <ul id="nav">
            <li><Link className="text-link" to='/tournament'>Tournament</Link></li>
            <li><Link className="text-link" to ='/projects'>Projects</Link></li>
            <li><Link className="text-link" to='/about'>About</Link></li>
            <li><Link className="text-link" to='/'>Home</Link></li>
        </ul>
    </header>
);
}
export default Header;