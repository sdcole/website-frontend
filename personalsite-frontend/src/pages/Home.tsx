import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const Home = () => {
    const navigate = useNavigate();


    const goToAboutPage = () => {
        navigate('/about'); // This changes the route to the "/about" page
    };

    return (
        <><div className='home-code-container'>
            <div className='home-code-line1'>
                <p>class <span className='secondary-code'>Program &#123;</span></p>
            </div>
            <div className='home-code-line2'>
                <p>static void <span className='secondary-code'>Main</span>&#40;string&#91;&#93; args&#41; &#123;</p>
            </div>
            
        </div><div>
                <h1>Home Page</h1>
                <Button variant="contained" onClick={goToAboutPage}>
                    Go to About Page
                </Button>
            </div></>
    );
}

export default Home;