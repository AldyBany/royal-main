import React, {useRef} from 'react'
import {retraite,voiture,respect,trust,driving,hands,habita} from '../assets/assurances/data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import React, {useRef} from 'react'

const assurance = () => {

    const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  return (
    <section className={`${styles.wrapper} `} >
        
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Choisir Royal Assurances, c'est choisir</h2>

            <Swiper
           modules={[Navigation]}
        //    navigation= {{
        //      prevEl: swiperNavPrevRef.current,
        //      nextEl: swiperNavNextRef.current,
        //    }}
           
           spaceBetween={80}
           slidesPerView={3}
           loop
           speed={600}
           width="280"
           onInit={(swiper)=>{
             swiper.params.navigation.prevEl= swiperNavPrevRef.current
             swiper.params.navigation.nextEl= swiperNavNextRef.current
             swiper.navigation.init()
             swiper.navigation.update()
     
           }}
            breakpoints={{
    // when window width is >= 640px
    280: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }}
          
           
            
            className={styles.cardBox}>
                {data.map((item)=>(
                    <SwiperSlide key={item.id} className={styles.card}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h4 className={styles.cardTitle}>{item.title}</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <a className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </a>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            <div ref={swiperNavPrevRef} className="absolute right-20">Prev</div>
            <div ref={swiperNavNextRef} className="absolute right-10">Next</div>

            <div className={styles.imgBox} style={{backgroundImage:`url('./insurance.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>

            </div>


        </div>

        

    </section>
  )
}

export default assurance


            
              
            

const styles={
    wrapper:'min-h-screen pt-16 mb-32 grid ',
    container:'sm:h-[90%] w-full lg:w-[80%] mx-auto bg-blue justify-self-end rounded-xl pt-8 pb-48 md:pb-28 px-3 sm:px-6 relative shadow-md',
    subtitle:'text-white font-semibold text-xl md:text-3xl mb-12',
    cardBox:'grid w-[180px] lg:w-[980px] md:gap-16 lg:mb-32 overflow-hidden',
    card:'text-white grid gap-5',
    icon:'w-20 h-20 bg-orange rounded-full  flex items-center justify-center',
    cardTitle:'text-xl font-semibold text-orange',
    description:'',
    link:'text-sm flex items-baseline space-x-3',
    imgBox:'absolute -bottom-48 left-[15%] w-[70%] lg:w-[60%] mx-auto h-80 rounded-md'
}

const data =[
    {id:1,title:'Assurance Auto',icon:voiture},
    {id:2,title:'Assurance Maison',icon:habita},
    {id:3,title:'Assurance Business',icon:voiture},
    {id:4,title:'Assurance Commerciale',icon:voiture},
    {id:5,title:'Assurance Sante',icon:voiture},
    {id:6,title:'Assurance Vie',icon:voiture},
]

const SVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12" fill="none" viewBox="0 0 52 10" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M32 8l4 4m0 0l-4 4m4-4H3" className="h-6 w-12"/>
</svg>

