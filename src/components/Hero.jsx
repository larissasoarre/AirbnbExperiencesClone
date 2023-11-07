function Hero() {
    const cards = data.map(card => {
        return <Card
            key={card.id}
            content={card}
        />
    })

    return (
        <section className='hero'>
            <div className='hero--headings'>
                <h1 className='hero--title'>Online Experiences</h1>
                <h2 className='hero--subheading'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h2>
            </div>
            <div className='card-grid'>
                {cards}
            </div>
        </section>
    )
}

export default Hero
