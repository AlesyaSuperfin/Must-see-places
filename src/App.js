import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [places, setPlaces] = useState(data);
  const [element, setElement] = useState(0);
  const [result, setResult] = useState("It's time to plan your next journey!");

  const previousElement = () => {
    setElement((element => {
      element --;
      if(element < 0) {
        return data.length -1;
      }
      return element;
    }))
  }

  const nextElement = () => {
    setElement((element => {
      element ++;
      if (element > data.length -1) {
        element =0;
      }
      return element;
    }))
  }

  const DeleteAll = () => {
    setPlaces([]);
    setResult("You are a great traveller! Keep travelling and inspiring!");
  }

  const removeElement = (id) => {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces (newPlaces);
    if (element >= newPlaces.length) {
      setElement(0);
    }

    if  (newPlaces.length === 0) {
      setResult("You are a great traveller! Keep travelling and inspiring!");
    }
  }

  const currentElement = places.length > 0 ? places[element] : null;

  return (
    <div className='container'>

    <div className="header">
      <h1>TOP-15 Must See Places in The World</h1>
      <p>There are never-ending reasons to travel, but many go to seek those awe-inspiring moments that stop them in their tracks, searching for the sights that will stay with them forever. Every day, travelers find those experiences among the ruins of Machu Picchu or at the summit of Mount Kilimanjaro.</p>
      <p>From sky-blue lakes in Canada to sandstone beaches in Seychelles, beauty abounds in every corner of the Earth. Focusing largely on national parks, mountains, beaches, deserts, and other natural wonders, we’ve compiled the world's most beautiful places to inspire your next dream destination.</p>
      <button onClick={() => DeleteAll()}>I've already explored all of them!</button>
      <h2 className='resultText'>You've explored {15 -places.length} of 15 the most beautiful places in the world!</h2>
      <h3>{result}</h3>
    </div>


          <div className='slider'>
        {currentElement && (
          <div>
          <img src={currentElement.image} alt="place" width="100%"/>
          <p className='textPhoto'>PHOTO: {currentElement.source}</p>
          <h2>{currentElement.name}</h2>
          <h3>⚲ {currentElement.country}</h3>
          <p>{currentElement.description}</p>
          </div>
        )}

        {currentElement && (
          <div className='btn'>
            <button onClick={previousElement}>Previous</button>
            <button onClick={() => removeElement(currentElement.id)}>I've explored this place!</button>
            <button onClick={nextElement}>Next</button>
          </div>
        )}
          </div>
      </div>
  )
}

export default App;
