import './Card.css'

function tellColorName(house) {
  let color

  if (house === 'Slytherin') {
    color = 'paragraph_house--green'
  } else if (house === 'Gryffindor') {
    color = 'paragraph_house--red'
  } else if (house === 'Hufflepuff') {
    color = 'paragraph_house--yellow'
  } else if (house === 'Ravenclaw') {
    color = 'paragraph_house--blue'
  } else {
    color = 'paragraph_house--white'
  }

  return color
}

function Card({ characterName, house, picture }) {
  const houseColor = tellColorName(house)

  //   const characterName = 'Harry Potter'
  //   const house = 'Gryffindor'
  //   const picture = 'http://hp-api.herokuapp.com/images/harry.jpg'

  return (
    <section className="card">
      <h2 className="card_subtitle">{characterName}</h2>
      <img
        className="character_picture"
        src={picture}
        alt={`Picture of ${characterName}`}
        // Eigentlich brauchen wir 'Picture of' nicht, weil der Screenreader automatisch erkennt, dass es sich um ein Picture handelt.
      />
      <p className={houseColor}> House {house}</p>
      <button>more</button>
    </section>
  )
}

export default Card
