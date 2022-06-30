import { useState } from 'react'

//components
import HomeContentCard from '../../components/HomeContentCard'

const Home = () => {
  
  return (
    <div className='home'>
      <div className='home-logo'>
        <img src="" alt="" />
        <p>LOGO</p>
        <h1>EDEM'S FOODS <span>Freshness overload all year round</span></h1>
      </div>

      <div className='home-content'>
        {/* a body prop will be added later on when the actual page content is
        ready to render the different texts for each title */}
        <HomeContentCard title={"about"} />
        <HomeContentCard title={"frequently asked"} />
        <HomeContentCard title={"contact"} />
        <HomeContentCard title={"sample text 1"} />
        <HomeContentCard title={"sample text 2"} />
      </div>

      <div className='home-shop'>
        <a href="#">SHOP</a>
      </div>
    </div>
  )
}

export default Home