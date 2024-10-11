import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { Typography } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
                    <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                    &#60;<span className='secondary-code'>Saebastion Cole </span>&#47;&#62;
                    </Typography>
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
          About Me
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