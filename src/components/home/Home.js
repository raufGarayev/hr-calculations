import React from 'react'
import './Home.sass'
import { Link } from 'react-router-dom'
import {MdHotelClass, MdOutlineBarChart, MdAttachMoney} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'


const Home = () => {
  return (
    <section className='home'>
        <div className="home-top">
          <h1>HR Calculations</h1>
        </div>
        <div className='home-buttons'>
            <Link to={'/mezuniyyet'}><MdHotelClass className='home-icon' /> Məzuniyyət hesablama</Link>
            <Link to={'/staj'}><MdOutlineBarChart className='home-icon' /> Staj hesablama</Link>
            <Link to={'/sonhesab'}><GiReceiveMoney className='home-icon' /> Son haqq hesablama</Link>
        </div>
        <footer className='home-footer'>
          <div className="home-footer-garayev">
            <p>Made by</p>
            <a href="https://garayev.dev">Garayev Inc.</a>
          </div>
          <div className="home-footer-fidan">
            <p>İdeya müəllifi</p>
            <a href="https://www.linkedin.com/in/fidan-khanmammadzada-47b963242/">Fidan Khanmammadzada</a>
          </div>
        </footer>
    </section>
  )
}

export default Home