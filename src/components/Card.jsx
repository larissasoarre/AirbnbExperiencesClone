import { useState } from 'react';
import '../assets/styles/Card.css'

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
                <img className="card-container--img" src={`/src/assets/images/${props.content.coverImg}`} alt="" />
            </div>

            <div className="card-container--data">
                <div className="review">
                    <svg className='star-review'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" width="32" height="32" >
                        <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" fill="#222222"></path>
                        </svg>
                    <p>{props.content.stats.rating} ({props.content.stats.reviewCount}) · {props.content.location}</p>
                </div>
                <p className='info'>{props.content.title}</p>
                <p className='price'>From €{props.content.price} / person</p>
            </div>
        </div>
    )
}

export default Card;
