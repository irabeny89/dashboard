import React from 'react'
import styles from '../../styles/NavSection.module.css'
import { FaFemale, FaMale, FaSearch, FaUsers } from 'react-icons/fa'

const NavSection = ({user="Anonymous"}) => 
  <div className={styles.navSection}>
    <h1><span>Hello</span>, {user}</h1>
    <p className={styles.welcome}>
      Welcome to your dashboard, kindly sort through the user base
    </p>
    <div className={styles.inputSearch}>
      <FaSearch size="25" /><input placeholder="Find a user" />
    </div>
    <h4>Show Users</h4>
    <div className={styles.options}>
      <div>
        <div className={styles.allUsersIcon}><FaUsers size="50" /></div>
        <p>All Users</p>
      </div>
      <div>
        <div className={styles.allMaleUsersIcon}><FaMale size="50" /></div>
        <p>Male Users</p>
      </div>
      <div>
        <div className={styles.allFemaleUsersIcon}>
          <FaFemale size="50" />
        </div>
        <p>Female Users</p>
      </div>
    </div>
  </div>

export default NavSection