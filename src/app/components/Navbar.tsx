import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='flex  justify-between p-4 '>
      <div className='font-extrabold text-2xl'>Tech <span className='text-primary'>Blogs</span>  </div>
      <ul className='flex gap-4 items-center '>
        <ModeToggle/>
        <li>About</li>
        <li>Contact us</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}

export default Navbar
