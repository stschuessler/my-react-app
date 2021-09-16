import logo from './logo.svg'
import './App.css'
import Header from '../header_component/Header'
import Card from '../card_component/Card/Card'
import Footer from '../footer_component/Footer'

import data from '../../data.json'

import { useState } from 'react'

console.log(data)

function App() {
  console.log('test')

  const [activeHouse, setActivHouse] = useState('')

  function handleHouseButtonClicked(house) {
    setActivHouse(house)
  }

  let filteredData

  if (activeHouse) {
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
