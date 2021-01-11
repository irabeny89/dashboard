import React from 'react'
import Image from 'next/image'
import { CgMail } from 'react-icons/cg'
import { FiPhoneCall } from 'react-icons/fi'
import styles from '../../styles/User.module.css'
import { FaArrowRight } from 'react-icons/fa'

const User = ({thumbnail, name, location, phone, email}) => 
  <div className={styles.user}>
    <div><Image src={thumbnail} width="100" height="100" /></div>
    <div>
      <h3>{name.first} {name.last}</h3>
      <p>{location.street}, {location.city}, {location.state}</p>
      <div>
        <p className={styles.phoneEmail}><div><CgMail size="20" /></div> {email}</p>
        <p className={styles.phoneEmail}><div><FiPhoneCall /></div> {phone}</p>
      </div>
    </div>
    <div><FaArrowRight /></div>
  </div>

export default User