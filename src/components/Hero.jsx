import data from '../data'
import Card from './Card'
import '../assets/styles/Hero.css'

function Hero() {
    const lastThreeCards = data.slice(-2);

    const cards = lastThreeCards.map (card => {
        return <Card 
        key={card.id}
        content={card}
        />
    })

    return (
        <section className='hero'>
                <h1 className='hero--title'>Unforgettable activities hosted by locals</h1>
            <div className='card-grid'>
                {cards}
            </div>
        </section>
    )
}

export default Hero
