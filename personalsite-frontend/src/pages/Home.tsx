import { Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';

interface HomeProps {
    visitorCount: number | null;
  }

const Home = ({visitorCount}: HomeProps) => {

  return (
    <div className="page-container">
      <TopPageCode />

      <div className="page-content">
        <Typography variant="h2" component="h1" className="header" gutterBottom>
          Saebastion Cole
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm Saebastion, welcome to my personal site.
        </Typography>
        <Typography variant="body1" paragraph>
          This site has had {visitorCount !== null ? visitorCount : '...'} visitors
        </Typography>
        <Typography variant="body1" paragraph>
          I am a software engineer currently specializing in batch file-driven and full-stack applications.
        </Typography>
        <Typography variant="body1" paragraph>
          Take a look around!
        </Typography>
      </div>

      <BottomPageCode />
    </div>
  );
};

export default Home;
