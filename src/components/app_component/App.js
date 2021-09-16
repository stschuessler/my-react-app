import logo from './logo.svg'
import './App.css'
import Header from '../header_component/Header'
// import CardHermione from '../card_component/CardHermione'
// import CardHarry from '../card_component/CardHarry'
// import CardRon from '../card_component/CardRon'
// import CardDraco from '../card_component/CardDraco'
// import CardCedric from '../card_component/CardCedric'
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

  //   let someText = 'Thihihi'

  //   if (someText.length > 42) {
  //     someText = 'Oh no'
  //   }
  //   console.log(someText)

  //   const url = 'https://reactjs.org'
  //   const showLink = false

  //   const linkHint = showLink ? 'with link!' : ''
  // const linkHint = showLink && 'with link!'

  // filteredData Alternative, bei der nicht auf die Charaktere eingegangen wird, die kein Hous zugewiesen haben
  // const filteredData = data.filter(
  //   (character) => character.house === activeHouse,
  // )

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

      {/* <header className="App-header">
        {linkHint}
        <img src={logo} className="App-logo" alt="logo" />
        <p className="myParagraph">
          Here is some Text: <code>{someText}</code> <br />
          Here is again some Text: {someText} <br />
          And again: <i>{someText}</i> <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {showLink ? (
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React, amazing!
          </a>
        ) : (
          'no link'
        )}
      </header> */}
    </div>
  )
}

export default App
