import { Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';

interface Props {
  visitorCount: number | null;
}
const About = ({visitorCount}: Props) => {
  return (
    <div className='page-container'>
            <TopPageCode/>

            <div className='page-content'>
              <div className="code-container">
                <Typography variant="body1" fontFamily="'Source Code Pro', monospace">
                  int <span className='secondary-code'>visitorCount</span> = <span className='tertiary-code'>{visitorCount !== null ? visitorCount : '...'}</span>&#59;
                </Typography>
              </div>
              <Typography variant="h2" component="h1" className="header" gutterBottom>
                  About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am a driven developer that has been tinkering since I was 12.
              </Typography>
              <Typography variant="body1" paragraph>
                  I began my journey working with windows batch scripting. From there I began learning more common high level languages.
              </Typography>
              <Typography variant="body1" paragraph>
                  Nowadays in my free time I research embedded and web development. 
              </Typography>

              <Typography variant="h3" component="h2" className="header" gutterBottom>
                  Work Experience
              </Typography>
              <Typography variant="body1" paragraph>
                I have experience in the following systems:
              </Typography>
              <ul>
                  <li>Servers/OS's - Windows Server, Linux, IBM AIX(UNIX), TPX(Mainframe) </li>
                  <li>Languages - C#, VB.NET, C++, C, Java, Javascript/Typescript, Python, COBOL, JCL</li>
                  <li>Frameworks - .NET(Framework and Standard), React/Vite, Arduino</li>
                  <li>Databases - Oracle(PLSQL), Microsoft(MSSQL), Postgresql</li>
                  <li>Microcontrollers/processors - Arduino, Raspberry Pi</li>
                </ul>
            </div>

            <BottomPageCode/>
        </div>
  );
}

export default About;