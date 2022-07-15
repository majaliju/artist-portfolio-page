import React, {useState, useEffect} from "react";
import SongSubmissionForm from "./SongSubmissionForm";

function SongRequests(){
  // create a state for the song requests
  let [songData, setSongData] = useState([]);


  // update state with our list of songs
  useEffect (() => {
    fetch("http://localhost:3000/songs")
    .then((r) => r.json())
    .then((songs) => setSongData([...songData, songs]))
  }, [])


// map each element then create a list for each element 
// songData.map(() => <li>{}</li>)


// create a form for users to enter a song
// send that information to the server

  return (
    <div>
      <h3>HERE IS WHERE WE DISPLAY OUR SONG REQUESTS</h3>
      <h3>SUBMIT A SONG!</h3>
      <SongSubmissionForm />

    </div>
  )
}

export default SongRequests;