import { Link } from 'react-router-dom'


const PageTitle = ({ title, linkTo }) => {
  return (
    <div className='page-title'>
      <Link to={linkTo} className='back-arrow-div'>
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>
      </Link>
      <h2>{title}</h2>
    </div>
  )
}

export default PageTitle