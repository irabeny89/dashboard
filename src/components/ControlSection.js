import React, { useContext } from 'react'
import styles from '../../styles/ControlSection.module.css'
import { FaFemale, FaMale, FaSearch, FaUsers } from 'react-icons/fa'
import { OutputContext } from './OutputSectionProvider'

const ControlSection = ({ user = "Anonymous" }) => {
  const { setOutputSectionTitle } = useContext(OutputContext)
  const clickHandler = title => setOutputSectionTitle(title)
  return (
    <div className={styles.controlSection}>
      <h1><span>Hello</span>, {user}</h1>
      <p className={styles.welcome}>
        Welcome to your dashboard, kindly sort through the user base
      </p>
      <div className={styles.inputSearch}>
        <FaSearch size="25" /><input placeholder="Find a user" />
      </div>
      <h4>Show Users</h4>
      <div className={styles.options}>
        <div onClick={() => clickHandler("All Users")}>
          <div className={styles.allUsersIcon}><FaUsers size="50" /></div>
          <p>All Users</p>
        </div>
        <div onClick={() => clickHandler("Male Users")}>
          <div className={styles.allMaleUsersIcon}><FaMale size="50" /></div>
          <p>Male Users</p>
        </div>
        <div onClick={() => clickHandler("Female Users")}>
          <div className={styles.allFemaleUsersIcon}>
            <FaFemale size="50" />
          </div>
          <p>Female Users</p>
        </div>
      </div>
    </div>
  )
}

export default ControlSection