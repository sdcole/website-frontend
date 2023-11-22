import '../../../App.css';
import fbLogo from '../../../images/facebook.png'
import igLogo from '../../../images/instagram.png'
import githubLogo from '../../../images/github.svg'
import linkedinLogo from '../../../images/linkedin.png'

const Footer = () => {
    return(
        <div id="footer" className="App-footer">
        <p>Saebastion Cole 2023</p>
        <div id="footer-socials">
            <a href="https://www.facebook.com/saebastion.cole/" target="_blank" rel="noreferrer">                    
            <img src={fbLogo} alt="fbLogo" width="25vh" height="25vh"></img>
            </a>
            <a href="https://www.instagram.com/saebastion" target="_blank" rel="noreferrer">                    
            <img src={igLogo} alt="igLogo" width="25vh" height="25vh"></img>
            </a>
            <a href="https://www.github.com/sdcole" target="_blank" rel="noreferrer">                    
            <img src={githubLogo} alt="githubLogo" width="25vh" height="25vh"></img>
            </a>
            <a href="https://www.linkedin.com/in/saebastion-cole-45961a244/" target="_blank" rel="noreferrer">                    
            <img src={linkedinLogo} alt="linkedLogo" width="25vh" height="25vh"></img>
            </a>
        </div>
        </div>
);
}
export default Footer;