import '../App.css';
import fbLogo from '../images/facebook.png'
import igLogo from '../images/instagram.png'
import tiktokLogo from '../images/tiktok.png'

const Footer = () => {
    return(
        <div id="footer" className="App-footer">
        <p>Saebastion Cole 2023</p>
        <div id="footer-socials">
            <a href="" target="_blank" rel="noreferrer">                    
            <img src={fbLogo} alt="fbLogo"></img>
            </a>
            <a href="" target="_blank" rel="noreferrer">
            <img src={igLogo} alt="igLogo"></img>
            </a>
            <a href="" target="_blank" rel="noreferrer">
            <img src={tiktokLogo} alt="tiktokLogo"></img>
          </a>
        </div>
        </div>
);
}
export default Footer;