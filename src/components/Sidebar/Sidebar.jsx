import React from 'react'
import "./Sidebar.css"
import logo from '../../assets/logo.svg'
import user from './smile.jpg'

function Sidebar() {
  return (
    <div className='side-bar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='nav'>
        <div className='nav-item'>
          Overview
        </div>
        <div className='nav-item'>
          Onboarding
        </div>
        <div className='nav-item monitoring'>
          Monitoring
        </div>
        <div className='nav-item'>
          Flagging
        </div>
        <div className='nav-item'>
          Source of Income
        </div>
        <div className='nav-item'>
          UAR
        </div>
      </div>
      <div className='user-profile'>
        <div className='user-avatar'>
        <img className='user-img' src={user} alt='user' />
        </div>
        <div className='user-details'>
          <b>Elon Musk</b>
          <p>elon@twitter.com</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar