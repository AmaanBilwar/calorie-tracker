import React from 'react'
import logo from '../assets/yap.gif'
import logo2 from '../assets/EWWW.webp'
const About = () => {
  return (
    <>
   

        <div className='flex justify-center align-center'>
        Hi, I'm Amaan [he/him],
        </div>
        <div className='flex justify-center pl-20 pr-20 pt-4'>
        i'm currently a computer engineering at university of cincinnati. i have a passion for coding, learning, and building and growing.
        <br />
        </div>
        
         <div className='flex justify-center pl-20 pr-20'>
         When i'm not programming you can catch me sleeping, watching streams, listening to music and looking at
          <div className=' ml-2 bg-grey-50 hover:bg-pink-200 cursor-pointer'>
            <a href="https://www.google.com/search?q=cute+puppies&sca_esv=0d90bbeb9060b7a6&sca_upv=1&udm=2&biw=1699&bih=945&ei=ZI93ZvnFNdyx5NoPi_2iMA&ved=0ahUKEwj5h5S-3fCGAxXcGFkFHYu-CAYQ4dUDCBA&uact=5&oq=cute+puppies&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGN1dGUgcHVwcGllczIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIxClQhRRYnShwBHgAkAEBmAHCAaABgQiqAQQxMi4xuAEDyAEA-AEBmAIQoALcBsICChAAGIAEGEMYigXCAg0QABiABBixAxhDGIoFwgIJEAAYgAQYGBgKmAMAiAYBkgcCMTagB7Q-&sclient=gws-wiz-serp" target='_blank'>cute dog pictures.</a>
         
         
          </div>
         </div>
         <div className='flex justify-center align-center'>
        SO corny         
         <img src={logo2} alt="logo" className='h-8 w-8' />
        </div>
        <br />

    </>
  )
}

export default About
