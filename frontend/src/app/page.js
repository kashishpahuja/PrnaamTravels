import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Gallary from './components/Gallary'
import About from './components/About'
import Packages from './components/Packages'
import Places from './components/Places'
import Uttrakhand from './components/Uttrakhand'
import KedarnathAuthorityHub from './components/Kedarnath'
import Logo from './components/Logo'
import CategoryDiscovery from './components/Categories'

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
      <CategoryDiscovery/>
       {/* <About/>  */}
      {/* <KedarnathAuthorityHub/> */}
    </div>
  )
}

export default page