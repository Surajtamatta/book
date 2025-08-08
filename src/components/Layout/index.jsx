import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full '>
        <Navbar/>
        <div className='bg-[#F8F3EC]'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout