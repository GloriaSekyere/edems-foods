import { useState } from 'react'

const Home = () => {
  const [ isAbout, setIsAbout ] = useState(true)
  const [ isFaq, setIsFaq ] = useState(false)
  const [ isContact, setIsContact ] = useState(false)

  return (
    <div className='home'>
      {isAbout && (
        <div className='modal-bg'>
          <div className='modal'>
            <h2 className='modal-title'>ABOUT US</h2>
            <div className='modal-content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p> 
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.</p>
              <button 
                className='modal-close'
                onClick={() => setIsAbout(false)}>CLOSE</button>
            </div>
          </div>
        </div>
      )}

      <div className='home-logo'>
        <img src="" alt="" />
        <p>LOGO</p>
        <h1>EDEM'S FOODS <span>Freshness overload all year round</span></h1>
      </div>

      <div className='home-content'>
        <div 
          className='home-content-card' 
          onClick={() => setIsAbout(true)}>
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