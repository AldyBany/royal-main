import Navbar from 'components/navbar'
import React from 'react'
// import Img from 'assets/ban.jpg'

const Banner = () => {
  return (
    <div className={styles.container} style={{backgroundImage:`url('./bg1.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className={styles.navbar}>
        say again

      </div>

      <div className={styles.swiper}>

      </div>
        
    </div>
  )
}

export default Banner

const styles = {
  container:'relative h-screen w-full font-montserrat',
  navbar:'h-[80%] w-14 bg-orange fixed left-0 top-24 z-100',
  swiper:'h-48 w-[40%] bg-blue absolute bottom-0 right-0 z-10'
}
  


console.log(styles.wrapper)