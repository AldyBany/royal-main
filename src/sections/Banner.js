import N from 'components/n'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade,Autoplay } from 'swiper';
import 'swiper/css/effect-fade'
import 'swiper/css';
import 'swiper/css/autoplay';


const Banner = () => {
  return (
<Swiper
      modules={[EffectFade,Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={true}
      slidesPerView={1}
      
      className="h-screen w-full"
    >
      <SwiperSlide className='w-full bg-red-400 flex items-center px-3 sm:px-6'  style={{backgroundImage:`url('./bg1.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className={styles.content}>
          <h1 className={styles.title}>Des Services de Qualité pour vos Voitures</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti et quos sequi! Doloribus, tenetur. Adipisci corporis ullam sunt quia? Maxime iure amet ratione.</p>

        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full flex items-center px-3 sm:px-6'  style={{backgroundImage:`url('./bg.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className={styles.content}>
          <h1 className={styles.title}>Chez Royal Services votre Voiture est en securite</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti et quos sequi! Doloribus, tenetur. Adipisci corporis ullam sunt quia? Maxime iure amet ratione.</p>

        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner

const styles = {
  container:'h-[85vh] md:h-[95vh] w-full p-5 flex items-center justify-center',
  navbar:'h-[80%] w-14 bg-orange fixed left-0 top-24 z-100',
  swiper:'h-48 w-[40%] bg-blue absolute bottom-0 right-0 z-10',
  content:'max-w-4xl md:max-w-2xl grid justify-self-center ',
  title:'text-5xl md:text-7xl font-bold text-orange justify-self-center mb-4',
  description:"md:text-xl text-white font-semibold"
}
  


