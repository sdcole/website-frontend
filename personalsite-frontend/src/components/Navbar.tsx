import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing


const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <p>logo</p>
      </div>
      <div className='navbar-content'>
        {/* Use Material-UI Buttons for routing */}
        <Button
          variant="text"
          onClick={() => navigate('/')}
          className='navbar-route'  // Correct use of className here
        >
          Home
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/about')}
          className='navbar-route'  // Correct use of className here
        >
          About
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/projects')}
          className='navbar-route'  // Correct use of className here
        >
          Projects
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/contact')}
          className='navbar-route'  // Correct use of className here
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Navbar;