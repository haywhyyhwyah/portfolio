import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='nav-name'>Ayomide</h1>

            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <button className='nav-button'>Work With Me</button>
            </div>
        </nav>
    )
}

export default Navbar