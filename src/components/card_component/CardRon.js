import './CardRon.css'

const characterName = 'Ron Weasley'
const house = 'Gryffindor'

function CardRon() {
  return (
    <section>
      <h2 className="card_subtitle">{characterName}</h2>
      <p> I will become a picture</p>
      <p> I will show you the house names: {house}</p>
      <button>more</button>
    </section>
  )
}

export default CardRon
