import React from 'react'
import { Link } from 'react-router-dom'

const  Home = ()  => {
  return (
    <>
    <h1>Hello</h1>
    <div className='flex'>
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to="/projects">
      <li>Projects</li>
      </Link>
      <Link to="/services">
      <li>Service</li>
      </Link> 
    </div>

    </>
  )
}

export default Home