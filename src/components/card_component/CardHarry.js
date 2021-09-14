import './CardHarry.css'

const characterName = 'Harry Potter'
const house = 'Gryffindor'
const picture = 'http://hp-api.herokuapp.com/images/harry.jpg'

function CardHarry() {
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

export default CardHarry
