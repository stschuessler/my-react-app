import './CardCedric.css'

const characterName = 'Cedric Diggory'
const house = 'Hufflepuff'

function CardCedric() {
  return (
    <section className="card">
      <h2 className="card_subtitle">{characterName}</h2>
      <p> I will become a picture</p>
      <p> I will show you the house names: {house}</p>
      <button>more</button>
    </section>
  )
}

export default CardCedric
