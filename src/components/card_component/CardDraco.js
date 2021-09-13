import './CardDraco.css'

const characterName = 'Draco Malfoy'
const house = 'Slytherin'

function CardDraco() {
  return (
    <section className="card">
      <h2 className="card_subtitle">{characterName}</h2>
      <p> I will become a picture</p>
      <p> I will show you the house names: {house}</p>
      <button>more</button>
    </section>
  )
}

export default CardDraco
