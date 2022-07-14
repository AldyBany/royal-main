import React from 'react'
import {Data4} from 'data/mechanic.js'

const mechanic = () => {

    console.log("all data:" ,Data4)
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Mechanique General pour votre voiture</h2>
            <div className={styles.grid}>
                {Data4.map((item)=>(
                    <div className={styles.card} key={item.id}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h4 className={styles.cardTitle}>{item.title}</h4>
                        {/* <p className={styles.description}>{item.description}</p> */}

                    </div>
                ))}

            </div>
             
        </div>
    </section>
  )
}

export default mechanic

const styles={
    wrapper:'h-screen w-full container  mt-48',
    container:'pt-8 px-6',
    subtitle:'text-blue font-semibold text-3xl mb-12 text-center',
    grid:'grid grid-cols-3 gap-6',
    card:'grid gap-3 bg-white pt-7 px-5 pb-6',
    cardTitle:'text-2xl text-blue font-bold'

}