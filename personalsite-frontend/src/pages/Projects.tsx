import { Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';
import {Link} from '@mui/material';

interface Props {
  visitorCount: number | null;
}
const Projects = ({visitorCount}: Props) => {

    return (
        <div className='page-container'>
            <TopPageCode/>

            <div
              className='page-content'>
              <div className="code-container">
                <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                  int <span className='secondary-code'>visitorCount</span> = <span className='tertiary-code'>{visitorCount !== null ? visitorCount : '...'}</span>&#59;
                </Typography>
              </div>
              <Typography variant="h2" component="h1" className="header" gutterBottom>
                Projects
              </Typography>
              <Typography variant="body1" paragraph>
                The best way to view my projects is on my{' '}
                <Link
                  href="https://github.com/sdcole"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="#45A29E"
                >
                  GitHub
                </Link>
              </Typography>
              <Typography variant="body1" paragraph>
                The following are some of my favorites:
              </Typography>


              {/* Project Card: Recent Trading Data */}
              <div
                style={{
                  border: '1px solid #45A29E',
                  borderRadius: '12px',
                  margin: '2rem 0',
                  padding: '1.5rem',
                  background: '#171E28',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  maxWidth: '700px',
                  width: '100%',
                  minWidth: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxSizing: 'border-box',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                <Typography variant="h3" component="h2" className="header" gutterBottom>
                  <Link
                    href="https://github.com/sdcole/recent-trading-data"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="#45A29E"
                  >
                    Recent Trading Data
                  </Link>
                </Typography>
                <Typography variant="body1" paragraph>
                  This is a simple console application that utilizes the Alpaca Markets API. The application checks real time market data for selected ticker symbols and stores the current market price. I built this to have this data as a historical record and to see how well Artificial Intelligence would be able to predict the prices.
                </Typography>
                <Typography variant="subtitle1" sx={{fontWeight: 600, color: '#66FCF1', marginTop: '1em'}}>Tech Stack</Typography>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: '1.2em'}}>
                  <li><b>Language:</b> C# (.NET 8)</li>
                  <li><b>Library:</b> PostgreSQL DB, AlpaciAPI</li>
                  <li><b>OS:</b> Windows</li>
                </ul>
              </div>

              {/* Project Card: Capstone */}
              <div
                style={{
                  border: '1px solid #45A29E',
                  borderRadius: '12px',
                  margin: '2rem 0',
                  padding: '1.5rem',
                  background: '#171E28',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  maxWidth: '700px',
                  width: '100%',
                  minWidth: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxSizing: 'border-box',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                <Typography variant="h3" component="h2" className="header" gutterBottom>
                  Capstone
                </Typography>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', justifyContent: 'flex-start'}}>
                  <a
                    href="https://github.com/RoschenJ/Capstone-FrontEnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.5em 1.2em',
                      background: '#45A29E',
                      color: '#171E28',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#66FCF1'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#45A29E'; }}
                  >
                    Front-End
                  </a>
                  <a
                    href="https://github.com/RoschenJ/Capstone-BackEnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.5em 1.2em',
                      background: '#45A29E',
                      color: '#171E28',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#66FCF1'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#45A29E'; }}
                  >
                    Back-End
                  </a>
                </div>
                <Typography variant="body1" paragraph>
                  For my Capstone I worked in a team provided requirements from BuilderTrend (a construction solution company). At the time AI was just an emerging technology. They gave us a project in which we were to explore a few use cases with AI. The application uses both object recognition and OCR. The object recognition takes in a picture and returns keywords to what it is with a confidence score alongside. We utilized OCR (Optical Character Recognition) to take receipts and convert them to text.
                </Typography>
                <Typography variant="subtitle1" sx={{fontWeight: 600, color: '#66FCF1', marginTop: '1em'}}>Tech Stack</Typography>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: '1.2em'}}>
                  <li><b>Language:</b> C# (ASP .NET CORE API Backend), React/Typescript (Frontend)</li>
                  <li><b>Library:</b> Google AI</li>
                  <li><b>OS:</b> Windows</li>
                </ul>
              </div>

              {/* Project Card: Clap Lamp */}
              <div
                style={{
                  border: '1px solid #45A29E',
                  borderRadius: '12px',
                  margin: '2rem 0',
                  padding: '1.5rem',
                  background: '#171E28',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  maxWidth: '700px',
                  width: '100%',
                  minWidth: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxSizing: 'border-box',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                <Typography variant="h3" component="h2" className="header" gutterBottom>
                  <Link
                    href="https://github.com/zrandolph977/ClapLamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="#45A29E"
                  >
                    Clap Lamp
                  </Link>
                </Typography>
                <Typography variant="body1" paragraph>
                  Clap Lamp was a college project in which I created a lamp that would turn on and off based off of a user clapping. I accomplished this by creating a multithreaded application that would have a thread that looks for what could be deemed a "clap" while listening to the microphone. The other thread would watch the succession of the claps. If it was in a certain threshold then it would trigger the relay.
                </Typography>
                <Typography variant="subtitle1" sx={{fontWeight: 600, color: '#66FCF1', marginTop: '1em'}}>Tech Stack</Typography>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: '1.2em'}}>
                  <li><b>Language:</b> Python</li>
                  <li><b>Hardware:</b> Raspberry Pi, USB Microphone, 5 Volt Relay, Cheap Desk Lamp</li>
                  <li><b>OS:</b> Raspian (Linux)</li>
                </ul>
              </div>
            </div>

            <BottomPageCode/>
        </div>
    );
};

export default Projects;
