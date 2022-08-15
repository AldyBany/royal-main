import Horaire from 'components/Horaire'
import React from 'react'
import Caller from '../components/caller'

const footer = () => {
  return (
    <footer className={styles.wrapper} id={4}>
      <div className={styles.container}>
        <div className="">
          <h4 className={styles.royal}>Royal<span className="text-orange">Services</span></h4>
          <p className={styles.description}>Ce qu'il y a de mieux pour votre voiture.</p>

          <div className="flex items-center space-x-1 cursor-pointer group text-center">
            <div className="border-2 border-blue group-hover:border-orange duration-500 w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path className="fill-blue text-blue duration-500 group-hover:text-orange group-hover:fill-orange" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl text-blue duration-500 group-hover:text-orange">06 928 05 94</h4>

            </div>
          </div>
         
        </div>
        
        <div className={styles.contactsBox}>
          <h4 className={styles.title}>Nos Services</h4>
          <div className={styles.bo}>
            {services.map((item)=>(
              <h6 key={item.id} className="text-blue duration-500 hover:text-orange cursor-pointer">{item.title}</h6>

            ))
            }
           

          </div>
         

         
        <div className={styles.box}>
          
        </div>
        
          
        </div>

        <div className={styles.contactsBox}>
          <h4 className={styles.title}>Nos Horaires</h4>
          <div className={styles.bo}>
            {heures.map((item)=>(
              <Horaire key={item.id} item={item}/>

            ))
            }
           

          </div>
         

         
        <div className={styles.box}>
          
        </div>
        
          
        </div>

         <div className="">
         <h4 className={styles.title}>Nous Contacter</h4>
            <div className="flex  space-x-2">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path className="text-blue" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path className="text-blue" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </div>
            <p className='text-sm font-semibold text-blue'>200, Avenue du caire, quartier 7-7 de Dany (Tie-Tie)</p>

            </div> 

         
        
         
          <div className="flex items-center space-x-2 mt-2 cursor-pointer group">
            
          <h4 className={styles.subtitle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path className="group-hover:text-orange duration-500 " strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
          </h4>
          <p className="text-blue duration-500 group-hover:text-orange text-sm">administration@royalservices.africa</p>
            
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-blue mb-2">Restons connecter</h4>
          </div>
          
          <div className='flex items-center space-x-4 mt-5'>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">1</div>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">1</div>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">1</div>
          
        </div>

          </div>
        
        

      </div>
      <p className={styles.bottomText}>&#169;2022 RoyalServices, all right reserved</p>

    </footer>
  )
}

export default footer

const heures =[
  {id:1,jour:'Lundi',heure:'08h00 - 17h00'},
  {id:2,jour:'Mardi',heure:'08h00 - 17h00'},
  {id:3,jour:'Mercredi',heure:'08h00 - 17h00'},
  {id:4,jour:'Jeudi',heure:'08h00 - 17h00'},
  {id:5,jour:'Vendredi',heure:'08h00 - 17h00'},
  {id:6,jour:'Samedi',heure:'08h00 - 15h00'},
 
]

const services=[
  {id:1, title:"Mechanique Generale"},
  {id:2, title:"Assurance Automobile"},
  {id:3, title:"Auto Ecole"},
  {id:4, title:"Lavage"},
]

const styles={
    wrapper:'bg-white pt-16 pb-8 px-2 sm:px-4 ',
    container:'container max-w-screen-lg mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6 md:gap-2 xl:gap-8',
    contactsBox:'w-full',
    contacts:'flex',
    bottomText:'mt-24 text-gray text-center',
    royal:'font-bold text-xl text-blue mb-2 text-cent md:text-left',
    title:'font-bold  text-blue mb-2 text-cent md:text-left',
    subtitle:'font-semibold text-blue text-center md:text-left',
    box:'flex space-x-1 mb-2 justify-center md:justify-start',
    description:'mb-4 text-blue ',
    desc:' mb-2'
}