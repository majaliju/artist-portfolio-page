import { BrowserRouter } from 'react-router-dom';
import './App.css';


/*
(CHECK)
You must make a single page application (only one index.html file) using create-react-app.

Your app should use at least 5 components in a way that keeps your code well organized.

(CHECK)
There should be at least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.

(CHECK)
Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.
You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.


Add some styling: you're encouraged to write your CSS from scratch, either by using styled components or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap, Semantic UI, or Material UI) if you prefer.
*/

// add a song requests components
// db.json file holds the actual artist-name and song-title name
// as a request for me to sing

function App() {
  return (
    <BrowserRouter>
     <div>
      <Navbar />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
