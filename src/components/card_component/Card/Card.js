import './Card.css'
import { useState } from 'react'

function tellColorName(house) {
  let color

  if (house === 'Slytherin') {
    color = 'div_background--green'
  } else if (house === 'Gryffindor') {
    color = 'div_background--red'
  } else if (house === 'Hufflepuff') {
    color = 'div_background--yellow'
  } else if (house === 'Ravenclaw') {
    color = 'div_background--blue'
  } else {
    color = 'div_background--white'
  }

  return color
}

function Card({
  characterName,
  house,
  imgageUrl,
  gender,
  dateOfBirth,
  eyeColour,
  hairColour,
}) {
  const houseColor = tellColorName(house)
  const [showDetails, setShowDetails] = useState(false)
  const [emoji, setShowEmoji] = useState('')

  return (
    <section className="card">
      <div className="image">
        <img
          className="character_image"
          src={imgageUrl}
          alt={`Image of ${characterName}`}
          // Eigentlich brauchen wir 'Image of' nicht, weil der Screenreader automatisch erkennt, dass es sich um ein Image handelt.
        />
      </div>
      <div className={`card__content ${houseColor}`}>
        <h2 className="content__subtitle">
          {emoji}
          {characterName}
        </h2>
        <p> House {house}</p>
        <button
          onClick={() => {
            if (showDetails) {
              setShowDetails(false)
            } else {
              setShowDetails(true)
            }
          }}
        >
          {showDetails ? 'Less information' : 'More information'}
        </button>
      </div>

      {showDetails ? (
        <div>
          {<h2>More Details</h2>}
          <ul>
            <li>Gender: {gender}</li>
            <li>Date of Birth: {dateOfBirth}</li>
            <li>Eye Colour: {eyeColour}</li>
            <li>Hair Colour:{hairColour}</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        {characterName === 'Harry Potter' ? '⚡' : ''} {characterName}
        {/* command + control + leerzeichen öffnent Emoji Auswahl */}
        {/* <div>{characterName === 'Hermione Granger' ? '🤫' : ''}</div> */}
        {/* hier soll eigentlich eine if abfrage hin wo beide namen abgefragt werden */}
      </div>

      <div>
        <button
          onClick={() => {
            setShowEmoji('🤓')
          }}
        >
          🤓
        </button>
        <button
          onClick={() => {
            setShowEmoji('🐍')
          }}
        >
          🐍
        </button>
        <button
          onClick={() => {
            setShowEmoji('🍀')
          }}
        >
          🍀
        </button>

        <button
          onClick={() => {
            setShowEmoji('⚡️')
          }}
        >
          ⚡️
        </button>
      </div>
    </section>
  )
}

export default Card
