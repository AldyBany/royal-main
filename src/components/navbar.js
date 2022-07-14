import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
       
    </nav>
  )
}


export default Navbar

const navItems =[
    {id:1,title:'Acceuil'},
    {id:2,title:'Services', subtitle:true, sub:'TopGear'},
    {id:3,title:'Contacts'},
]
const styles={
    wrapper:'h-full w-12 fixed left-0 bg-red-300 py-12 px-6 flex items-center justify-between',
    link:'px-8 py-4'
}