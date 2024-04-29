import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [places, setPlaces] = useState(data);
  const [element, setElement] = useState(0);
  const {id, name, country, image, source, description} = data[element];

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

  const removeElement = (id) => {
    let newPlaces = places.filter(place => place.id !== id);
    setPlaces (newPlaces)
  }

  return (
    <div className='container'>

    <div className="header">
      <h1>TOP-15 Must See Places in The World</h1>
      <p>There are never-ending reasons to travel, but many go to seek those awe-inspiring moments that stop them in their tracks, searching for the sights that will stay with them forever. Every day, travelers find those experiences among the ruins of Machu Picchu or at the summit of Mount Kilimanjaro.</p>
      <p>From sky-blue lakes in Canada to sandstone beaches in Seychelles, beauty abounds in every corner of the Earth. Focusing largely on national parks, mountains, beaches, deserts, and other natural wonders, we’ve compiled the world's most beautiful places to inspire your next dream destination.</p>
      <button onClick={() => setPlaces([])}>I've already explored all of them!</button>
      <h2 className='resultText'>You've explored {15 -places.length} of 15 the most beautiful places in the world!</h2>
      <h3>It's time to plan your next journey!</h3>
    </div>

      {/* {places.map((element => {
        const{id, name, country, image, source, description} = element;
        

        return ( */}
          <div className='slider'>

          <div>
          <img src={image} alt="place" width="100%"/>
          <p className='textPhoto'>PHOTO: {source}</p>
          <h2>{name}</h2>
          <h3>⚲ {country}</h3>
          <p>{description}</p>
          </div>
          
          <div className='btn'>
            <button onClick={previousElement}>Previous</button>
            <button onClick={() => removeElement(id)}>I've explored this place!</button>
            <button onClick={nextElement}>Next</button>
          </div>
          </div>
        )

      }))}


      </div>
  )
}

export default App;
