import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <header>
        <div className='flex justify-center align-center'> 
        <div className='p-2'>
          <div className='bg-grey-50 rounded-lg hover:bg-pink-200 p-2'>
          < Link to ="/">
            Home
            </Link>
          </div>
            
        </div>
        <div className='p-2'> 
          <div className='bg-grey-50  rounded-lg hover:bg-pink-200 p-2'>
          <Link to ="/About">
            About me
            </Link>
          </div>
        
        </div>
            <div className='p-2'>
              <div className='bg-grey-50  rounded-lg hover:bg-pink-200 p-2'>
                <Link to ="/Support">
            Support me
            </Link></div></div>
              
            
        </div>
      </header>


       <div>
        
       </div>
    </>
  )
}

export default Navbar
