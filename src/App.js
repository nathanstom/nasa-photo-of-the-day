import React, {useEffect, useState} from "react";
import axios from "axios";
import MainPage from './MainPage';
import DropDown from './DropDown';

import "./App.css";


function App() {

  const [photo, setPhoto] = useState('')
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=137pnL8isOWOtbEUEomeOxz7xNCi2rY0cTL1mhSX')
    .then(res => {
      console.log(res.data)
      setPhoto(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <DropDown />
      <MainPage 
        photo={photo}
        title={photo.title}
        description={photo.explanation}
        date={photo.date}
        imageURL={photo.url}
      />
    </div>
  );
}

export default App;
