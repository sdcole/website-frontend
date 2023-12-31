import '../../App.css';
import {useState} from "react";
import React, { MouseEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingSpinner from '../Content/Materials/LoadingSpinner';

const TournamentForm = () => {
    //const PROXY = 'https://v1.nocodeapi.com/saebastion/ep/NfYBIrynVPsMmGZq';
    const PROXY = 'http://nullbyte.access.ly:7268/api/main/post';
    const [steamID, setSteamID] = useState("");
    const [discordID, setDiscordID] = useState("");

    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [steamImageSrc, setSteamImageSrc] = useState('');
    const [steamName, setSteamName] = useState('');

    const [discordImageSrc, setDiscordImageSrc] = useState('');
    const [discordName, setDiscordName] = useState('');

    const [updateText, setUpdateText] = useState('');



//handler
const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {

    if (steamID === "" || discordID === "") {
        setUpdateText("One or more of the fields is empty.");
    }
    else {
        let response = addUser(steamID, discordID);
    }
    
  };



  async function addUser(_steamID: string, _discordID: string) {
    setIsClicked(true);
    setIsLoading(true);
    console.log(JSON.stringify({steamID: _steamID, discordID: _discordID}));
    const formPostData = {
      method: 'POST',
      headers: {mode: 'no-cors', 'Content-Type': 'application/json'},
      body: JSON.stringify({steamID: _steamID, discordID: _discordID}) 
    }
    try {
        const response = await fetch(PROXY, formPostData);
        const jsonResult = response;
        let jsonResponse = await jsonResult.json();

        if (response.status === 200) {
            //alert("Thank you " + jsonResponse.steam_name + " you were signed up sucessfully\n" );
            console.log(jsonResponse);
            setSteamImageSrc(jsonResponse.steamAvatar);
            setSteamName(jsonResponse.steamName);
            setDiscordName(jsonResponse.discordUserName);
            setDiscordImageSrc(jsonResponse.discordAvatar);
            setUpdateText("You have signed up successfully.");
    
        }
        else {
            console.log(jsonResponse);
            if (jsonResponse.validSteamUser == false && jsonResponse.validDiscordUser == false) {
                setUpdateText("There was an error please ensure your SteamID and DiscordID is correct and try again.");
            }
            else if (jsonResponse.validSteamUser == false) {
                setUpdateText("There was an error please ensure your SteamID is correct and try again.");
            }
            else if (jsonResponse.validDiscordUser == false) {
                setUpdateText("There was an error please ensure your DiscordID is correct and try again.");
            }
            else {
                setUpdateText("There was an error please ensure data provided is correct and try again.");
            }
            
        }
        setIsClicked(false);
        setIsLoading(false);
        return response;
    }
    catch (error){
        console.log(error);
        setUpdateText("There was an error connecting to the server please try again.");
        setIsClicked(false);
        setIsLoading(false);
    }
    


    

    
}


  


  
    return (
        <div>
            <div className = "form">
                <div className = "form-element">
                <TextField
                    required
                    id = "standard-required"
                    label = "SteamID"
                    defaultValue = ""

                    value = {steamID}
                    onChange = {(e) => {
                        setSteamID(e.target.value);
                    }}
                />
                </div>
                <br></br>
                <div className = "form-element">
                <TextField
                    required
                    id = "standard-required"
                    label = "DiscordID"
                    defaultValue = ""

                    value = { discordID }
                    onChange = {(e) => {
                        setDiscordID(e.target.value);
                    }}
                />
                </div>
                <br></br>
                <div className="form-element">
                    <Button variant="contained"
                        onClick={(e) => handleClick(e, "clicked")}
                        disabled = {isClicked}>
                        Submit
                    </Button>
                    </div>
                    
            </div>
            
            <img src={steamImageSrc}></img>
                    <p>{steamName}</p>
                    
            <br></br>
                    <p>{updateText}</p>

                        {isLoading ? <LoadingSpinner /> : null}


        </div>

    );
}

export default TournamentForm;

