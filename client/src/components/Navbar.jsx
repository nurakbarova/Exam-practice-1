import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
   <header className={styles.nav_header}>
   <div className={styles.nav_header_light} >
    <img  src="https://preview.colorlib.com/theme/security/img/logo.png.webp" alt="" />
   </div>
   <div className={styles.nav_header_right}>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Team</li>
        <li>Price</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages ></li>
    </ul>
   </div>
   </header>
  )
}

export default Navbar