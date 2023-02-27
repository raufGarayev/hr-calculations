import React from 'react'
import './Home.sass'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className='home'>
        <h1>HR calculations for Fidan Khanmammadzada</h1>
        <div className='home-buttons'>
            <Link to={'/mezuniyyet'}>Məzuniyyət hesablama</Link>
            <Link to={'/staj'}>Staj hesablama</Link>
        </div>
    </section>
  )
}

export default Home