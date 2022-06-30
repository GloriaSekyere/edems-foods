import { useState } from 'react'

//components
import Modal from './Modal'

const HomeContentCard = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
    {isOpen && <Modal title={title} handleClose={handleClose} />}
    <div className='home-content-card' onClick={() => setIsOpen(true)}>
      <p>&gt; {title}</p>
    </div>
    </>
    
  )
}

export default HomeContentCard