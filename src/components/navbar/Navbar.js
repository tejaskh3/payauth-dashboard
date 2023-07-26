import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/Logo1.png';
import circle from '../..//assets/circle.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.leftContainer}>
       <div className={styles.logoContainer}>
       <img src={circle}  className={styles.circle} alt="logo" />
       <img src={logo} className={styles.logo} alt="logo" />
       </div>
        <Link className={styles.link}>Docs</Link>
        <Link className={styles.link}>Example</Link>
      </div>
      <div className={styles.rightContainer}>
        <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
