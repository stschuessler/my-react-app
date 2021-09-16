import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [activeHouse, setActivHouse] = useState('')

  function handleHouseButtonClicked(house) {
    setActivHouse(house)
  }

  // const activateClickEventHandler = (house) => {
  //   setActivHouse(house)
  //   setOnotherVariable(house)
  // }
  // in Zeile:  onClick={() => activateClickEventHandler('Gryffindor')}

  return (
    <footer className="footer">
      <nav className="navigation">
        <h2>{activeHouse}</h2>
        <button
          className={
            activeHouse === 'Gryffindor'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => handleHouseButtonClicked('Gryffindor')}
        >
          Gryffindor
        </button>
        <button
          className={
            activeHouse === 'Hufflepuff'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => handleHouseButtonClicked('Hufflepuff')}
        >
          Hufflepuff
        </button>
        <button
          className={
            activeHouse === 'Ravenclaw'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => {
            handleHouseButtonClicked('Ravenclaw')
          }}
        >
          Ravenclaw
        </button>
        <button
          className={
            activeHouse === 'Slytherin'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => {
            handleHouseButtonClicked('Slytherin')
          }}
        >
          Slytherin
        </button>
      </nav>
    </footer>
  )
}

export default Footer
