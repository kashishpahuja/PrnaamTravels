import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Gallary from './components/Gallary'
import About from './components/About'
import Packages from './components/Packages'
import Places from './components/Places'
import Uttrakhand from './components/Uttrakhand'
import TripTales from './components/TripTales'
import KedarnathAuthorityHub from './components/Kedarnath'
import Logo from './components/Logo'
import CategoryDiscovery from './components/Categories'
import Poster from './components/Poster'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Packages/>
    
      <Logo/>
  
      {/* <Places/> */}
      <Uttrakhand/>
      <Gallary/>
      {/* <CategoryDiscovery/> */}
      <Poster/>
      <TripTales/>
      <Footer/>
       {/* <About/>  */}
      {/* <KedarnathAuthorityHub/> */}
    </div>
  )
}

export default page