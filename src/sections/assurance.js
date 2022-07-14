import React from 'react'
// import Img from 'assets/ban.jpg'

const assurance = () => {
  return (
    <section className={`${styles.wrapper} `} >
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Choisir Royal Assurances, c'est choisir</h2>

            <div className={styles.cardBox}>
                {data.map((item)=>(
                    <div key={item.id} className={styles.card}>
                        <div className={styles.icon}></div>
                        <h4 className={styles.cardTitle}>{item.title}</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <a className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </a>
                    </div>
                ))}
            </div>

            <div className={styles.imgBox}>

            </div>


        </div>

        

    </section>
  )
}

export default assurance

const styles={
    wrapper:'min-h-screen w-full pt-16 mb-32 grid font-montserrat',
    container:' sm:h-[90%] w-full sm:w-[80%] bg-blue justify-self-end pt-8 pb-48 md:pb-28 px-6 relative',
    subtitle:'text-white font-semibold text-3xl mb-12',
    cardBox:'grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-16',
    card:'text-white grid gap-5',
    icon:'w-20 h-20 bg-white rounded-full',
    cardTitle:'text-xl font-semibold',
    description:'',
    link:'text-sm flex items-baseline space-x-3',
    imgBox:'absolute -bottom-48 left-[20%] w-[60%] mx-auto h-80 bg-orange rounded-md'
}

const data =[
    {id:1,title:'One Por'},
    {id:2,title:'Two Somethin'},
    {id:3,title:'Three Awesome'},
]

const SVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12" fill="none" viewBox="0 0 52 10" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M32 8l4 4m0 0l-4 4m4-4H3" className="h-6 w-12"/>
</svg>