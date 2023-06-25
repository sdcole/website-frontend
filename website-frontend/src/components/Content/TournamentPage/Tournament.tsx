import '../../../App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TournamentForm from './TournamentForm';
const Tournament = () => {
    return (
      <div id="tournament">
        <br></br>
        <p>To sign up for the Quake III tournament please fill out the form below.</p>
        <p>To find your SteamID64 please refer to <a href="https://steamid.io/">steamIO</a></p>
        <TournamentForm/>
      </div>
    );
}
export default Tournament;