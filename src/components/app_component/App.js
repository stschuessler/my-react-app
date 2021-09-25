import './App.css'
import Header from '../header_component/Header'
import Card from '../card_component/Card/Card'
import Footer from '../footer_component/Footer'

//import data from '../../data.json'

import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer)
        setData(dataFromServer)
      })
  }, [])

  const [favorites, setFavorites] = useState([])

  function handleFavoriteButtonClicked(favorites) {
    setFavorites(favorites)
  }
  console.log(favorites)

  const [activeHouse, setActivHouse] = useState('')
  // später useState('All') verwenden, sobald der 5. Button 'All' in
  // der NavBar implementiert ist (TODO)

  // In Local-Storage speichern
  function handleHouseButtonClicked(newActiveHouse) {
    setActivHouse(newActiveHouse)

    const stringifiedValue = JSON.stringify(newActiveHouse)
    localStorage.setItem('activeHousLocalStorage', stringifiedValue)
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
