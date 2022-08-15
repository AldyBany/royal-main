
import Banner from 'sections/Banner'

import Services from 'sections/services'
import Navbar from 'components/n'
import Swiper from 'components/swiper2'
import Frame from 'components/frame'
import Footer from 'sections/footer'
import Emergency from 'sections/emergency'
import Proof from 'sections/proof'
import About from 'sections/about'
import T from 'data/t'
import Item from 'components/Item'

import React, {useState} from 'react'



export default function Home() {

  const[cliked,setCliked] =useState(false)
  return (
    <div className='border-box mt-6'>
      <Navbar/>
      {/* <Banner/> */}
      <About/>
      {/* <Item/> */}
      {/* <Swiper/> */}
     
      
      
      <Services/>
      <Emergency/>
      <Proof/>
      <Footer/>
    </div>
  )
}

const styles={
 
}
