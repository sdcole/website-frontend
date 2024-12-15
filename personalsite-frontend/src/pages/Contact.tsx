import {Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className='page-container'>
            <TopPageCode/>

            <div className='page-content'>
                <Typography variant="h2" component="h1" className="header" gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1" paragraph>
                    You can find the following contact information below
                </Typography>

                <div className='footer-icon-container'>
                  <a href="https://github.com/sdcole" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} color="#45A29E"/>
                  </a>
                  <a href="https://www.facebook.com/saebastion.cole" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} color="#1877F2" /> {/* Facebook blue */}
                  </a>
                  <a href="https://www.instagram.com/saebastion" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} color="#E1306C" /> {/* Instagram pinkish-red */}
                  </a>
                  <a href="https://www.linkedin.com/in/saebastion-cole-45961a244" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} color="#0A66C2" /> {/* LinkedIn blue */}
                  </a>
                  </div>
                </div>
                
            <BottomPageCode/>
        </div>
    );
};

export default Contact;
