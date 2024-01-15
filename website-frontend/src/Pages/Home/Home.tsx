import '../../App.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {useState} from "react";

const Home = () => {

    const [nextIsClicked, setNextIsClicked] = useState(false);
    const [NextIsLoading, setNextIsLoading] = useState(false);

    const [prevIsClicked, setPrevIsClicked] = useState(false);
    const [prevIsLoading, setPrevIsLoading] = useState(false);

    const handleNextClick = (event: React.MouseEvent<HTMLElement>, text: string) => {

      
      
  };
    const newsItems = [
      {
        title: 'Quake Tournament',
        content: 'I am planning on having a quake tournament soon. If interested, please look at the registration.',
      },
      {
        title: 'Quake Tournament2',
        content: 'I am planning on having a quake tournament soon. If interested, please look at the registration.',
      },
      // Add more news items as needed
    ];
  
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
    const showNextNews = () => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    };
  
    const showPrevNews = () => {
      setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
    };
  
    const currentNewsItem = newsItems[currentNewsIndex];
  
    return (
      <div className="home">
        <br></br>
        <h1>Hi, I'm Saebastion, welcome to my website</h1>
        <h2>Software Developer</h2>
        <p>Take a look around!</p>
        <h2>News</h2>
        <div>
        <Button 
          sx={{ color: '#ECE3CE', backgroundColor: '#739072', borderColor: '#739072', 
          ":hover": {
          bgcolor: "#3A4D39",
          color: "#ECE3CE"
          }
          }}
          variant="contained"
          onClick={showPrevNews}
          disabled = {prevIsClicked}>
          Previous
          </Button>
        <Button 
          sx={{ color: '#ECE3CE', backgroundColor: '#739072', borderColor: '#739072', 
          ":hover": {
          bgcolor: "#3A4D39",
          color: "#ECE3CE"
          }
          }}
          variant="contained"
          onClick={showNextNews}
          disabled = {nextIsClicked}>
          Next
          </Button>
          

          </div>
        <div id="news" className="center-news">
          
          <div className="news-container">
            <div className="news-item">
              <h3 className="news-title">{currentNewsItem.title}</h3>
              <p className="news-content">{currentNewsItem.content}</p>
              <Button
                sx={{
                  color: '#ECE3CE',
                  backgroundColor: '#739072',
                  borderColor: '#739072',
                  ':hover': {
                    bgcolor: '#3A4D39',
                    color: '#ECE3CE',
                  },
                }}
                variant="contained"
                component={Link}
                to={'/tournament'}
              >
                Register
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Home;