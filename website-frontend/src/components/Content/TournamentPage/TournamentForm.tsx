import '../../../App.css';
import {useState} from "react";
import React, { MouseEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingSpinner from '../Materials/LoadingSpinner';

const TournamentForm = () => {
    const PROXY = 'https://v1.nocodeapi.com/saebastion/ep/NfYBIrynVPsMmGZq';
    const [steamID, setSteamID] = useState("");
    const [discordID, setDiscordID] = useState("");

    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [imageSrc, setImageSrc] = useState('');
    const [steamName, setSteamName] = useState('');
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
        const jsonResult = await response.json();
        let jsonResponse = jsonResult;

        if (jsonResponse.success === true) {
            //alert("Thank you " + jsonResponse.steam_name + " you were signed up sucessfully\n" );
            setImageSrc(jsonResponse.steam_avatar);
            setSteamName(jsonResponse.steam_name);
            setUpdateText("You have signed up successfully.");
    
        }
        else {
            console.log(jsonResponse);
            setUpdateText("There was an error please ensure your steamID is correct and try again.");
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
            <img src={imageSrc}></img>
                    <p>{steamName}</p>
                    <br></br>
                    <p>{updateText}</p>

                        {isLoading ? <LoadingSpinner /> : null}


        </div>

    );
}

export default TournamentForm;

