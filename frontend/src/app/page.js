import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Places from './components/Places'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Places/>
    </div>
  )
}

export default page