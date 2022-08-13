import React from 'react'
import Assurance from './assurance'
import Mechanic from './mechanic_service'
import Emergency from './emergency'

const services = () => {
  return (
    <section className={styles.wrapper} id={2}>
        <h2 className={styles.title}>Nos Services</h2>
      {/* <Assurance/> */}
      <div className="h-48"></div>
      <Mechanic/>   
    </section>
  )
}

export default services


const styles={
    wrapper:'pt-16 mb-20 h-full',
    title:'text-center text-3xl md:text-4xl font-bold text-blue mb-8'
}