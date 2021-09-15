import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [activeHouse, setActivHouse] = useState('')

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
          onClick={() => setActivHouse('Gryffindor')}
        >
          Gryffindor
        </button>
        <button
          className={
            activeHouse === 'Hufflepuff'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => setActivHouse('Hufflepuff')}
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
            setActivHouse('Ravenclaw')
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
            setActivHouse('Slytherin')
          }}
        >
          Slytherin
        </button>
      </nav>
    </footer>
  )
}

export default Footer
