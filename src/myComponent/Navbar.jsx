import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar' >
        <div className='menu'>
          <ul className='list'>
            <Link to='/' style={{textDecoration:"none"}}><li>Home</li></Link>
            <Link to='/userpage' style={{textDecoration:"none"}}><li>Profile</li></Link>
          </ul>
        </div>
      </nav>
  )
}
