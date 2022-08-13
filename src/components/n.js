import React,{useState} from 'react'
import Logo from 'assets/logo.PNG'
import Caller from './caller'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Sticky from 'react-stickynode'

const n = () => {
    const[cliked,setCliked] = useState(false)
   
   
  return (
    <Sticky innerActiveClass="shadow-md transition-ease duration-1000 bg-[#fff]" innerZ={1000}>
        <nav className={styles.nav}>
        
        <div className={styles.imgBox}>
            <img src={Logo.src}/>
        </div>
             
        <div className={`absolute left-0 top-16 flex flex-col items-center justify-center right-0 bg-orange z-10 transition-ease duration-1000 opacity-100 h-96 shadow-md ${cliked?'left-[-400px] opacity-0':'left-0 opacity-100'} rounded-xl md:static md:top-0 md:z-0 md:bg-transparent md:opacity-100 md:shadow-none md:flex-row`}>
            <ul className='flex flex-col md:flex-row'>
                {
                    navItems.map((link)=>(
                        <Link
                        onClick={()=>setCliked(!cliked)}
                        activeClass="text-orange"
                            to={`${link.id}`} 
                            spy={true}
                            smooth={true}
                            
                            offset={-300}
                            duration={500}
                            delay={1000}
                            // isDynamic={true}
                            spyThrottle={500} 
                        className={styles.navItem} 
                        key={link.id}>
                        <span className={styles.navLink}> {link.title}</span>
                        </Link>   

                    ))
                }
            </ul>
        </div>

        <div className='md:hidden '  onClick={()=>setCliked(!cliked)}>
            <span className={styles.toggleBtn}>
                {toggle}
            </span>
        </div>

       {/* <Caller/> */}
       
    </nav>

    </Sticky>
    
  )
}

export default n
const navItems=[
    {id:1,title:'Acceuil'},
    {id:2,title:'Nos Services', subtitle:true, sub:'TopGear'},
    {id:3,title:'Nous Connaitre', subtitle:true, sub:'TopGear'},
    {id:4,title:'Contacts'},
]

const styles={
    nav:'max-w-screen-xl mx-auto px-3 mt-8 md:p-6 flex items-center justify-between h-6 relative mb-10',
    container:'flex justify-between items-center',
    imgBox:'text-2xl font-bold cursor-pointer w-[180px] md:w-[380px]',
    toggleBtn:'text-3xl cursor-pointer mx-2 block h-16 w-16 rounded-full bg-orange flex items-center justify-center',
    navMenu:' md:static absolute bg-orange md:bg-transparent w-full top-0 md:w-auto md:py-0 py-6 md:pl-0 pl-7 transition-all opacity-100 ease-in duration-500 z-1000',
    navItem:'mx-4 my-6 md:my-0',
    navLink:'text-white md:text-blue hover:text-orange font-semibold duration-500 cursor-pointer'
}
    



const menu = <svg width="23" height="23" viewBox="0 0 23 23">
                   
<path d="M 3 16.5 L 17 2.5" fill="transparent"
strokeWidth="3"
stroke="#fff"
strokeLinecap="round"/>
<path d="M 3 2.5 L 17 16.346" fill="transparent"
strokeWidth="3"
stroke="#fff"
strokeLinecap="round"/>

</svg>
const toggle =<svg  width="23" height="23" viewBox="0 0 23 23" >
<path d="M 2 2.5 L 20 2.5" fill="#ffffff" strokeWidth="3" stroke="#fff" strokeLinecap="round" className="bg-white text-white"/>
<path className="bg-white text-white" d="M 2 9.423 L 20 9.423"
fill="#ffffff"
strokeWidth="3"
stroke="#fff"
strokeLinecap="round"

/>
<path  d="M 2 16.346 L 20 16.346"
fill="transparent"
strokeWidth="3"
stroke="#fff"
strokeLinecap="round"/>

</svg>