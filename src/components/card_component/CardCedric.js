import './CardCedric.css'

const characterName = 'Cedric Diggory'
const house = 'Hufflepuff'
const picture = 'http://hp-api.herokuapp.com/images/cedric.png'

function CardCedric() {
  let houseColor = ''

  if (house === 'Slytherin') {
    houseColor = 'paragraph_house--green'
  } else if (house === 'Gryffindor') {
    houseColor = 'paragraph_house--red'
  } else if (house === 'Hufflepuff') {
    houseColor = 'paragraph_house--yellow'
  } else if (house === 'Ravenclaw') {
    houseColor = 'paragraph_house--blue'
  } else {
    houseColor = 'paragraph_house--white'
  }

  return (
    <section className="card">
      <h2 className="card_subtitle">{characterName}</h2>
      <img className="character_picture" src={picture} />
      <p className={houseColor}> House {house}</p>
      <button>more</button>
    </section>
  )
}

export default CardCedric
