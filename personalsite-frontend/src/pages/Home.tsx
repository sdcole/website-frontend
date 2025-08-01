import { Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';
import TypingEffect from '../components/TypingEffect';

interface Props {
    visitorCount: number | null;
    showHomeAnimation: boolean;
    setShowHomeAnimation: (show: boolean) => void;
  }

const Home = ({visitorCount, showHomeAnimation, setShowHomeAnimation}: Props) => {

  return (
    <div className="page-container">
      <TopPageCode />

      <div className="page-content">
        <div className="code-container">
          <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
            int <span className='secondary-code'>visitorCount</span> = <span className='tertiary-code'>{visitorCount !== null ? visitorCount : '...'}</span>&#59;
          </Typography>
        </div>
        <Typography variant="h2" component="h1" className="header" gutterBottom>
          

          <TypingEffect showHomeAnimation={showHomeAnimation} setShowHomeAnimation={setShowHomeAnimation}/>
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm Saebastion, welcome to my personal site.
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
