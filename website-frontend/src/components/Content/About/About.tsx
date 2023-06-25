import '../../../App.css';
const Home = () => {
    return (
        <div id="Home">
            <br></br>
            <h1>About</h1>
                <br></br>
            <h2>Education</h2>
                <p>Graduated 2022 from University of Nebraska Omaha with a Bachelors of Science in Computer Science.</p>
                <br></br>
            <h2>Tech Stack</h2>
                <p>I have experience in a wide range of technologies including:</p>
                <ul className="ul-left">
                    <li>Mainframe (JCL/COBOL)</li>
                    <li>C Based languages (C, C++, C#, Java, etc)</li>
                    <li>Web Based Scripting (Perl and Javascript)</li>
                    <li>Low Level language (Windows Batch, UNIX shell, MIPS assembly)</li>
                    <li>Embedded Systems (Raspberry Pi/Pico and other microcontrollers)</li>

                </ul>
            <br></br>
            <h2>Resume</h2>
                <p>To see my resume please click</p>
                <a>HERE</a>
                
        </div>
    );
}
export default Home;