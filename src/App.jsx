import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'
import './App.css'

function App() {
  const cards = data.map(card => {
    return <Card
      key={card.id}
      content={card}
    />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </>
  )
}

export default App
