import '../../App.css';
import Button from '@mui/material/Button';
import {useState} from "react";

const [isClicked, setIsClicked] = useState(false);
const [isLoading, setIsLoading] = useState(false);

//When pressed call api for resume
const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    //TODO: Here we need to create an api call that returns and shows the pdf
    try {
        console.log("Clicked");
    }
    catch {

    }
    
  };

const About = () => {
    return (
        <div id="About">
            <br></br>
            <h1>About</h1>
                <br></br>
            <h2>Education</h2>
                <p>Graduated 2022 from University of Nebraska Omaha with a Bachelors of Science in Computer Science.</p>
                <br></br>
            <h2>Tech Stack</h2>
                <p>I have experience in a wide range of technologies including:</p>
                <ul className="ul-left">
                    <li>C Based languages (C, C++, C#, Java, etc)</li>
                    <li>Web Based Scripting (Perl and Javascript)</li>
                    <li>Low Level language (Windows Batch, UNIX shell, MIPS assembly)</li>
                    <li>Embedded Systems (Raspberry Pi/Pico, Arduino, and other microcontrollers)</li>
                    <li></li>

                </ul>
                <br></br>
                <p>Preferred Techstack</p>
                <ul className="ul-left">
                    <li>Frontend: React TS</li>
                    <li>Backend: ASPNET Web API .NET8</li>
                    <li>Embedded: C++ with the Arduino library</li>

                </ul>
            <br></br>
            <h2>Resume</h2>
                <p>To see my resume please click</p>
                <div className="form-element">
                    <Button 
                        sx={{ color: '#ECE3CE', backgroundColor: '#739072', borderColor: '#739072', 
                            ":hover": {
                            bgcolor: "#3A4D39",
                            color: "#ECE3CE"
                          }
                        }}
                        variant="contained"
                        onClick={(e) => handleClick(e, "clicked")}
                        disabled = {isClicked}>
                        HERE
                    </Button>
                    </div>
                
        </div>
    );
}
export default About;