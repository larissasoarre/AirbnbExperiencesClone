import star from '../images/star.png'

function Card(props) {
    let badgeText
    if (props.content.openSpots === 0) {
        badgeText = "sold out"
    } else if (props.content.location === "Online") {
        badgeText = "online"
    }

    return (
        <div className='card-container'>
            <div className='card-container--cover'>
            {badgeText && <div className="card-container--status">{badgeText}</div>}
                <img className="card-container--img" src={`/src/images/${props.content.coverImg}`} alt="" />
            </div>

            <div className="card-container--data">
                <div className="review">
                    <img className='star-review' src={star} alt="" />
                    <p>{props.content.stats.rating} <span>({props.content.stats.reviewCount}) ● {props.content.location}</span></p>
                </div>
                <p className='info'>{props.content.title}</p>
                <p className='price'><b>From €{props.content.price}</b> / person</p>
            </div>
        </div>
    )
}

export default Card;
