import React from 'react'
import logo from '../assets/burning-money.gif'


const Support = () => {
  return (
    <>
    <div className='pt-20'>
    <div className='grid grid-rows-1 grid-flow-col gap-2'>
      <div className='flex justify-end align-center'>
        feel free to support me if you got the extra 
      </div>
      <div className='flex justify-start align-center'>
      <img src={logo} alt='cash-gif' className=' h-10 w-12'></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Support
