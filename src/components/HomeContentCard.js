import { useState } from 'react'

const HomeContentCard = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {isOpen && (
        <div className='modal-bg'>
          <div className='modal'>
            <h2 className='modal-title'>{title}</h2>
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
                onClick={() => setIsOpen(false)}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    <div 
      className='home-content-card' 
      onClick={() => setIsOpen(true)}
      >
      <p>&gt; {title}</p>
    </div>
    </>
    
  )
}

export default HomeContentCard