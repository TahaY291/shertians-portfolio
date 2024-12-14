import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div  id='header' className='fixed flex items-center justify-end w-full z-10 py-20 px-10'>
        <div id='header-btn' className='bg-black px-10 py-3 rounded-full border-4 text-md hover:bg-gray-500'>
            Hire Me 
        </div>
        <i className="ri-more-2-line text-4xl ml-3"></i>
    </div>
  )
}

export default Header