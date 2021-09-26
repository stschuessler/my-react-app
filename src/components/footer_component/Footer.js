import { useState } from 'react'
import './Footer.css'

function Footer({ activeHouse, onHouseButtonClick }) {
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
          onClick={() => onHouseButtonClick('Gryffindor')}
        >
          Gryffindor
        </button>
        <button
          className={
            activeHouse === 'Hufflepuff'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => onHouseButtonClick('Hufflepuff')}
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
            onHouseButtonClick('Ravenclaw')
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
            onHouseButtonClick('Slytherin')
          }}
        >
          Slytherin
        </button>
        <button
          className={
            activeHouse === 'All houses and non-house characters'
              ? 'footer__button--active navigation__button'
              : 'navigation__button'
          }
          onClick={() => {
            onHouseButtonClick('')
          }}
        >
          All Characteres
        </button>
      </nav>
    </footer>
  )
}

export default Footer
