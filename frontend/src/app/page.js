import React from 'react'
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
import Blogs from './components/Blogs'

function page() {
  return (
    <div>
      <Banner/>
      <Packages/>
    
      <Logo/>
      <Uttrakhand/>

  
      {/* <Places/> */}

      <Gallary/>
      <Poster/>

       <About/> 

      {/* <CategoryDiscovery/> */}
      <TripTales/>
      <Blogs/>
      {/* <KedarnathAuthorityHub/> */}
    </div>
  )
}

export default page