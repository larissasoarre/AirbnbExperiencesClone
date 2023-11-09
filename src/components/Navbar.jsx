import { useState } from 'react';
import airbnbLogo from '../assets/images/airbnb-logo.png'
import user from '../assets/images/user.png'
import '../assets/styles/Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const showMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav>
                <img className='nav--logo' src={airbnbLogo} alt="AirBnb Logo" />
                <div className="user-menu" onClick={showMenu}>
                    <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" width="32" height="32">
                        <g fill="none" stroke="#222222" strokeWidth="3px">
                            <path d="M2 16h28M2 24h28M2 8h28" />
                        </g>
                    </svg>
                    <ul className="nav-links" style={{display: menuOpen ? 'block' : 'none'}}>
                        <li><a href="">Log In</a></li>
                        <li><a href="">Sign Up</a></li>
                        <hr className='divisor links' />
                        <li><a href="">Experiences</a></li>
                    </ul>
                    <img className='user-img' src={user} alt="User image" />
                </div>
            </nav>
            <hr className='divisor' />
        </>
    )
}

export default Navbar;
