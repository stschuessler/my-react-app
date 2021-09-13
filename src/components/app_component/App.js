import logo from './logo.svg'
import './App.css'
import Header from '../header_component/Header'
import CardHermione from '../card_component/CardHermione'
import CardHarry from '../card_component/CardHarry'
import CardRon from '../card_component/CardRon'
import CardDraco from '../card_component/CardDraco'
import CardCedric from '../card_component/CardCedric'
import Footer from '../footer_component/Footer'

function App() {
  console.log('test')

  let someText = 'Thihihi'

  if (someText.length > 42) {
    someText = 'Oh no'
  }
  console.log(someText)

  const url = 'https://reactjs.org'
  const showLink = false

  const linkHint = showLink ? 'with link!' : ''
  // const linkHint = showLink && 'with link!'

  return (
    <div className="App">
      <Header />
      <CardHermione />
      <CardHarry />
      <CardRon />
      <CardDraco />
      <CardCedric />
      <Footer />

      {/* <header className="App-header">
        {linkHint}
        <img src={logo} className="App-logo" alt="logo" />
        <p className="myParagraph">
          Here is some Text: <code>{someText}</code> <br />
          Here is again some Text: {someText} <br />
          And again: <i>{someText}</i> <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {showLink ? (
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React, amazing!
          </a>
        ) : (
          'no link'
        )}
      </header> */}
    </div>
  )
}

export default App
