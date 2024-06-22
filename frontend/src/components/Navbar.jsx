import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <header>
        <div>
        <h1>
            <Link to ="/">
            Home
            </Link>
            <Link to ="/About">
            About me
            </Link>
            <Link to ="/Support">
            Support me
            </Link>
        </h1>
        </div>
      </header>
    </>
  )
}

export default Navbar
