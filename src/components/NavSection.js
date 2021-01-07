import React from 'react'
import styles from '../../styles/NavSection.module.css'
import { FaFemale, FaMale, FaSearch, FaUsers } from 'react-icons/fa'

const NavSection = ({user="user"}) => 
  <div className={styles.navsection}>
    <h1><span>Hello</span>, {user}</h1>
    <p>Welcome to your dashboard, kindly sort through the user base</p>
    <div className={styles.inputsearch}><FaSearch /><input placeholder="Find a user" /></div>
    <h4>Show Users</h4>
    <div>
      <div>
        <FaUsers /><p>All Users</p>
      </div>
      <div>
        <FaMale /><p>Male Users</p>
      </div>
      <div>
        <FaFemale /><p>Female Users</p>
      </div>
    </div>
  </div>

export default NavSection