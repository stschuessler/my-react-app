import './CardHarry.css'

const characterName = 'Harry Potter'
const house = 'Gryffindor'

function CardHarry() {
  return (
    <section className="card">
      <h2 className="card_subtitle">{characterName}</h2>
      <p> I will become a picture</p>
      <p> I will show you the house names: {house}</p>
      <button>more</button>
    </section>
  )
}

export default CardHarry
