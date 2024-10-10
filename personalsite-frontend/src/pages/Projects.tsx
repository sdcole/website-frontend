import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import TopPageCode from '../components/TopPageCode';
import BottomPageCode from '../components/BottomPageCode';
import {Link} from '@mui/material';

const Projects = () => {

    return (
        <div className='page-container'>
            <TopPageCode/>

            <div className='page-content'>
            <Typography variant="h2" component="h1" className="header" gutterBottom>
                    Projects
                </Typography>
                <Typography variant="body1" paragraph>
                  The best way to view my projects is on my <Link 
                  href="https://github.com/sdcole" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  underline="none"
                  color="#45A29E"
                >
                  GitHub
                </Link>
                </Typography>
                
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
                    This is a simple console application that utilizes the Alpaca Markets API.
                    The application checks real time market data for selected ticker symbols and stores the current market price.
                    I built this to have this data as a historical record and to see how well Artificial Intelligence would be able to predict the prices.
                </Typography>

                <Typography variant="h4" component="h3" className="header" gutterBottom>
                  Tech Stack
                
                <ul>
                  <li>Language: C# (.NET 8)</li>
                  <li>Library: PostgreSQL DB, AlpaciAPI</li>
                </ul>
                </Typography>


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
                    Clap Lamp was a college project in which I created a lamp that would turn on and off based off of a user clapping.
                    I accomplished this by creating a multithreaded application that would have a thread that looks for what could be deemed a "clap" while listening to the microphone.
                    The other thread would watch the succession of the claps. If it was in a certain threshold then it would trigger the relay. 

                </Typography>
                <Typography variant="h4" component="h3" className="header" gutterBottom>
                  Tech Stack
                
                <ul>
                  <li>Language: Python</li>
                  <li>Hardware: Raspberry Pi, USB Microphone, 5 Volt Relay, Cheap Desk Lamp</li>
                </ul>
                </Typography>
            </div>

            <BottomPageCode/>
        </div>
    );
};

export default Projects;
