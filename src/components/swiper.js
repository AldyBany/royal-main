// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade,Autoplay } from 'swiper';
import 'swiper/css/effect-fade'



import 'swiper/css';
import 'swiper/css/autoplay';

export default () => {
  
  return (
    <Swiper
      modules={[EffectFade,Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={true}
      slidesPerView={1}
      className="h-screen w-full"
    >
      <SwiperSlide className='w-full bg-red-400'  style={{backgroundImage:`url('./bg1.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className={styles.content}>
        <h1 className={styles.title}>Des Services de Qualité pour vos Voitures</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti et quos sequi! Doloribus, tenetur. Adipisci corporis ullam sunt quia? Maxime iure amet ratione.</p>

      </div>
      </SwiperSlide>
      <SwiperSlide className='w-full bg-yellow-400'  style={{backgroundImage:`url('./bg.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>Slide 4</SwiperSlide>
    </Swiper>
  );
};

