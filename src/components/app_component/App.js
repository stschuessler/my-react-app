//import logo from './logo.svg'
import './App.css'
import Header from '../header_component/Header'
import Card from '../card_component/Card/Card'
import Footer from '../footer_component/Footer'

import data from '../../data.json'

import { useState } from 'react'

//console.log(data)

function App() {
  //console.log('test')

  const [favorites, setFavorites] = useState([])

  function handleFavoriteButtonClicked(favorites) {
    setFavorites(favorites)
  }
  console.log(favorites)

  const [activeHouse, setActivHouse] = useState('')

  function handleHouseButtonClicked(house) {
    setActivHouse(house)
  }

  let filteredData
  // activeHouse ist im useState false, weil ein leere String
  // vgl state 'Gryffindor': wert ist true
  if (activeHouse) {
    // "" === false && "wat?" === true
    filteredData = data.filter((character) => {
      return character.house === activeHouse
    })
  } else {
    filteredData = data
  }

  return (
    <div className="App">
      <Header />

      {filteredData.map((character) => (
        <Card
          characterName={character.name}
          house={character.house}
          imgageUrl={character.image}
          gender={character.gender}
          dateOfBirth={character.dateOfBirth}
          eyeColour={character.eyeColour}
          hairColour={character.hairColour}
          key={character.name}
          favorites={favorites}
          onFavoriteButtonClick={handleFavoriteButtonClicked}
        />
      ))}

      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClicked}
      />
    </div>
  )
}

export default App
