import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ Title, Icon,type,HrefLink }) => {
  return (
    <>
      <Link to={HrefLink}>

        <button 
        type={type}
          className='px-7 py-2 bg-transparent text-lg border border-[#90C8F7] rounded-md transition duration-300 hover:bg-[#90C8F7] hover:text-white'
        >
          {Title}
          <i className={Icon} />
        </button>
      </Link>
    </>
  )
}

export default Button