import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Places from './components/Places'
import Uttrakhand from './components/Uttrakhand'
import KedarnathAuthorityHub from './components/Kedarnath'

function page() {
  return (
    <div>
      {/* <Navbar/>
      <Banner/>
      <About/> */}
      <Places/>
      <Uttrakhand/>
      <KedarnathAuthorityHub/>
    </div>
  )
}

export default page