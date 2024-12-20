import { Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';

const About = () => {
  return (
    <div className='page-container'>
            <TopPageCode/>

            <div className='page-content'>
                <Typography variant="h2" component="h1" className="header" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  I am an entheusiastic developer that has been doing it in my free time since I was 12.
                </Typography>
                <Typography variant="body1" paragraph>
                    I began my journey working with windows batch scripting. From there I began learning more common high level languages.
                </Typography>
                <Typography variant="body1" paragraph>
                    Nowadays my hobby passion revolves around microcontrollers and C++. 
                </Typography>

                <Typography variant="h3" component="h2" className="header" gutterBottom>
                    Work Experience
                </Typography>
                <Typography variant="body1" paragraph>
                  I have experience in the following systems:
                  <ul>
                    <li>Servers/OS's - Windows Server, Linux, IBM AIX(UNIX), TPX(Mainframe) </li>
                    <li>Languages - C#, VB.NET, C++, C, Java, Javascript/Typescript, Python, COBOL, JCL</li>
                    <li>Frameworks - .NET(Framework and Standard), React/Vite, Arduino</li>
                    <li>Databases - Oracle(PLSQL), Microsoft(MSSQL), Postgresql</li>
                    <li>Microcontrollers/processors - Arduino, Raspberry Pi</li>
                  </ul>
                </Typography>
            </div>

            <BottomPageCode/>
        </div>
  );
}

export default About;