import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-logo'>
        <img src="" alt="" />
        <p>LOGO</p>
        <h1>EDEM'S FOODS <span>Freshness overload all year round</span></h1>
      </div>

      <div className='home-content'>
        <div className='home-content-card'>
          <p>&gt; ABOUT US</p>
        </div>
        <div className='home-content-card'>
          <p>&gt; FREQUENTLY ASKED</p>
        </div>
        <div className='home-content-card'>
          <p>&gt; CONTACT</p>
        </div>
      </div>

      <div className='home-shop'>
        <a href="#">SHOP</a>
      </div>
    </div>
  )
}

export default Home