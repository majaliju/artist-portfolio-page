import React, {useEffect} from "react";

function SongRequests(){
  // let [songData, setSongData] = useState(null);


  // pull our list of songs from db.json
  useEffect (() => {
    fetch("http://localhost:3000/songs")
    .then((r) => r.json())
    .then((songs) => console.log(songs))
  })
// map each element then create a list for each element 

// songData.map(() => <li>{}</li>)

  return (
    <div>
      <h4>HERE IS WHERE WE DISPLAY OUR SONG REQUESTS</h4>
    </div>
  )
}

export default SongRequests;