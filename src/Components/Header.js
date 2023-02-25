import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <nav className='navbar' onClick={() => window.scroll(0,0)}>
             Movie App
        </nav>
    </div>
  )
}

export default Header